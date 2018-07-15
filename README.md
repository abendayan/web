## How to install
* Install the dependencies by running in the root folder:

      npm install

## Calculator

### Display logic

TODO

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

You can replace "web" with some other word.
#### Running instruction

Run:

      docker run -p 49160:3000 -d web/node-web-app

You can change the port 49160 to something else.
### Docker-Compose

Run:

    docker-compose build
    docker-compose up

#### E2E tests

TODO
