## How to install
* Install the dependencies by running in the root foolder:
      npm install

## Calculator
To run the tests: write "mocha" in the terminal

## Web Server
1. run the server.js (listens on port 3000): In the terminal run:
        node server.js
2.  run through the terminal (in the place YOUR_INPUT, write your input):
        curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": <YOUR_INPUT>}'       

Other option: run through the browser 'http://localhost:3000/' and after each input, press "submit".
