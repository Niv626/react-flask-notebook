from flask import Flask, jsonify, request, session
# from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask_cors import CORS
from notebook import Notebook, Note
from setup_logger import logger
from datetime import datetime
# from user import routes
import json


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = 'asd'
# app.config['MONGO_URI'] = 'mongodb+srv://NivE626:qvb13579@mongocluster.danqklq.mongodb.net/?retryWrites=true&w=majority'

cors = CORS(app)

cluster = MongoClient( "mongodb+srv://NivE626:qvb13579@mongocluster.danqklq.mongodb.net/?retryWrites=true&w=majority", connect=False,)
db = cluster["NoteBookDb"]
notes_collection = db["notes"]
users_collections = db["users"]

def start_session( user): 
    session['logged_in'] = True
    session['user'] = user
    return { "session": session }



@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    logger.info(data)
    user = {
        "email": data.get('email'),
        "password": data.get('password')
    }

    if users_collections.find_one({"email": user["email"]}):
        return {"error": "Email address is already in use"}
    users_collections.insert_one(user)
    return {}, 200

@app.route('/login', methods=['POST'])
def sign_in():
    data = request.get_json()
    logger.info(data.get("mail"))
    user = users_collections.find_one({"mail": data.get("email")})
    session = start_session(user)
    logger.info(user)
    if user:
        return {"session": session}
    return {'error': "Invalid login credentials"}
    # return User().sign_up()    

@app.route('/notes')
def get_notes():
    notes = []
    logger.info(notes_collection)
    notes_db = notes_collection.find({})
    
    for note in notes_db: 
        del note["_id"]
        notes.append(note)
        logger.info(note)
    return notes

@app.route('/add-note', methods=['POST'])
def add_note():
    data = request.get_json()
    notes_collection.insert_one({
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
    notes_collection.update_many({"id": id},
        {"$set": {'title': data.get('title'), 'text': data.get('text')}})
    return {
        "success": True
    }    

@app.route('/delete-note/<id>', methods=['DELETE'])
def delete_note(id):
    logger.info(id)
    # res = notebook.remove_note_by_id(id)  
    notes_collection.delete_one({"id": id})
    return {
        "success": True
    }

@app.route('/delete-all-notes', methods=['DELETE'])
def delete_all_note():
    # notebook.remove_all_notes()
    notes_collection.delete_many({})
    return {
        "success":  True
    }   
  

if __name__ == "__main__":
    notebook = Notebook()
    app.run(host="0.0.0.0", debug=True)   