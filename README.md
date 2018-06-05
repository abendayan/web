## Calculator
To run the tests: write "mocha" in the termina;

## Web Server
step1: run the server.js (listens on port 3000)
step2:  option1- run through the browser 'http://localhost:3000/' and after each input, press "submit"  
        option2- run through the "git bash": 
        curl http://localhost:3000/calculate -X POST -H 'content-type: application/json' -d '{"calculatorState": null, "input": <YOUR_INPUT>}'
        in the place YOUR_INPUT, write your input (it's like the line in option1 where you write the input)        
