let calculator = require('./calculator.js') //import calculator.js
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'))

let s = null;

app.post('/calculate', function(req, res){
    let expr = req.body.input
    let letter;
    while (expr.length > 0) {
        letter = expr.charAt(0)
        expr = expr.slice(1)
        s = calculator.calculateNextState(s, letter);
    }
    res.json({display:JSON.parse(s).display})
})

//listen to port
var server = app.listen(3000, () => console.log('listening...'))
module.exports = server
