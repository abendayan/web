## Authors

Adele Bendayan 336141056
Or Soffer
Eti Yanai

## How to install
* Install the dependencies by running in the root folder:

      npm install

## Calculator

### Display logic

As the example on the exercise, it will always display the last number.
For example, if the last entry was "2+34", it will display 34.
Supports: +, -, * , /


### Testing
In the terminal, write:

        mocha


## Web Server

### Instruction
1. run the server.js (listens on port 3000): In the terminal run:

        node server.js
2.  run through the terminal (in the place YOUR_INPUT, write your input):

        curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": <YOUR_INPUT>}'       

Other option: run through the browser 'http://localhost:3000/' and after each input, press "submit".

### Integration Test
In the terminal, write:

        npm test

## Docker

### DockerFile

#### Build instruction
Run:

      docker build -t web/node-web-app .

#### Running instruction

Run:

      docker run -p 49160:3000 -d web/node-web-app

The website is now accessible at: http://localhost:49160
Like previously, it can be tested using curl with:
    curl http://localhost:49160/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": <YOUR_INPUT>}'  

### Docker-Compose

Run:

    docker-compose build
    docker-compose up
