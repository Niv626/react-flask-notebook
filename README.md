# Note Me
### Note me is a modern note taking web application

### In the docker-compose file we set 5 replicas of the backend service to demonstrate a distributed system.
### The REACT client page is comminucating with the HAProxy load-balancer which forwards requests to each backend service in its turn.
## Features
- Write, Edit and Delete notes from any device that supports web browser and has internet connectivity

## Stack
- Database: MongoDb (on Cloud) Cluster with Replica sets and auto scaling
- Backend:
  - Language: Python
  - Framework: Flask
- Frontend:
  - Language: JavaScript
  - Framework: ReactJs
- Load balancer:
  - HAProxy

- Docker-Compose:
  -  5 Replicas of Backend FLASK service
  -  1 HAProxy Load balancer ( round robin technique )
  -  1 ReactJS Frontend client

## Requirements:
1. Docker 
## Install
1. Clone the repository:
  ```
  git clone https://github.com/Niv626/react-flask-notebook.git
  ```
2. cd into the repository:
  ```
  cd react-flask-notebook
  ```
3. Run command:
  ```
  docker-compose up --build -d
  ```
4. Open your browser in address http://localhost:3001/

5. Enjoy the app

## Shut down
```
docker-compose down
```


## Authors
Eden Nathan
Niv Elisha