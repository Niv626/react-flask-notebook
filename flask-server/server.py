from flask import Flask, jsonify, request
# from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS
from notebook import Notebook, Note
from setup_logger import logger
from datetime import datetime
import json


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
# app.config['MONGO_URI'] = 'mongodb+srv://NivE626:qvb13579@mongocluster.danqklq.mongodb.net/?retryWrites=true&w=majority'


cors = CORS(app)

cluster = MongoClient( "mongodb+srv://NivE626:qvb13579@mongocluster.danqklq.mongodb.net/?retryWrites=true&w=majority", connect=False,)
db = cluster["NoteBookDb"]
collection = db["notes"]


@app.route('/notes')
def get_notes():
    # notes = notebook.get_notes()
    # notesList = []
    # for note in notes:
    #     notesList.append({
    #         "title": note.title,
    #         "text": note.text,
    #         "date": note.date,
    #         "id": note.get_id()
    #     })
    notes = []
    logger.info(collection)

    notes_db = collection.find({})
    
    for note in notes_db: 
        del note["_id"]
        notes.append(note)
        logger.info(note)
    return notes

@app.route('/add-note', methods=['POST'])
def add_note():
    data = request.get_json()
    collection.insert_one({
        'id': data.get('id'),
        'title': data.get('title'),
        'text': data.get('text'),
        'date': data.get('date'),
    })
    # new_note = Note(data.get('title'), data.get('id'), data.get('text'), data.get('date'))
    # notebook.add_note(new_note) 
    return {
        "success":  True
    }

@app.route('/edit-note/<id>', methods=['POST'])
def edit_note(id):
    data = request.get_json()
    logger.info(id)
    # res = notebook.remove_note_by_id(id)  
    collection.update_many({"id": id},
        {"$set": {'title': data.get('title'), 'text': data.get('text')}})
    return {
        "success": True
    }    

@app.route('/delete-note/<id>', methods=['DELETE'])
def delete_note(id):
    logger.info(id)
    # res = notebook.remove_note_by_id(id)  
    collection.delete_one({"id": id})
    return {
        "success": True
    }

@app.route('/delete-all-notes', methods=['DELETE'])
def delete_all_note():
    # notebook.remove_all_notes()
    collection.delete_many({})
    return {
        "success":  True
    }   
  

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)   