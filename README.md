# Blockchain Implementation

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]()

## Features!!

  - Login and Registration
  - Play around with Blockchain and try to understand how it works


### Installation

requires [Node.js](https://nodejs.org/)  to be installed on target system

clone the app 
```sh
$ git clone git@github.com:joelmaguluri/BlockchainImplementation.git
```
Install the dependencies and devDependencies and start the server.

```sh
$ cd client/
$ npm install && npm run build
$ cd ..
$ npm install && npm start
```

### API Endpoints

| Endpoint| Description |
| ------ | ------ |
| /fetchblockchain/{email} (GET) | retrieve the blockchain saved by user in DB |
|/reset/${email}  (DELETE) | reset the blockchain and return genesis block|
|/authenticate  (POST) | verify whether the user password and email are authentic|
|/signup  (POST) | save the user in the DB if user doesn't already exists|
|/blockchain  (POST) | save changes made to blockchain in DB|



Detailed documentation of API endpoints is available [Here](https://app.swaggerhub.com/apis/sudeep987/Blockchainimplementation/2)


### Docker

Building docker image 
```sh
 docker build -t ${imagename} --build-arg PORT=5000 .
```

Once done, run the Docker image In this example, port will be 5000 

```sh
docker run -p 5000:5000 -e PORT=5000 ${imagename}
```
Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:5000
```
### Heroku Deployment via container registry


create new app in Heroku
```sh
heroku create
```
once the above command execution is done you recieve temporary app name (which can be changed)
now copy the app name and create tag

```sh
docker tag ${imagename}  registry.heroku.com/${appname}/web
```
now push the image to registry
```sh
docker push registry.heroku.com/${appname}/web
```
  
Then release the image to your app
```sh
heroku container:release web
```
Now open the app in your browser to verify the deployment
```sh
heroku open
```






