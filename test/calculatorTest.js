let calculator = require('../currency-calculator/calculator.js')
var assert = require('assert');

describe('Test the functionnalities of the calculator', () => {
    it('should verify sending int with multiple numbers', () => {
        let s = null;
        s = calculator.calculateNextState(s, "1");
        assert.equal(JSON.parse(s).display, "1");
        s = calculator.calculateNextState(s, "2");
        assert.equal(JSON.parse(s).display, "12");
    });

    it('should verify sending an operator at the beginning', () => {
        let s = null;
        s = calculator.calculateNextState(s, "+");
        assert.equal(JSON.parse(s).display, "");
    });

    it('should verify display after operator', () => {
        let s = null;
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "+");
        assert.equal(JSON.parse(s).display, "5");
    });

    it('should verify simple operation', () => {
        let s = null;
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "+");
        s = calculator.calculateNextState(s, "3");
        assert.equal(JSON.parse(s).display, "3");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "8");
    });

    it('should verify numbers after =', () => {
        let s = null;
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "6");
        assert.equal(JSON.parse(s).display, "6");
    });

    it('should verify a chaining of operators', () => {
        let s = null;
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "+");
        s = calculator.calculateNextState(s, "3");
        assert.equal(JSON.parse(s).display, "3");
        s = calculator.calculateNextState(s, "+");
        assert.equal(JSON.parse(s).display, "8");
        s = calculator.calculateNextState(s, "2");
        assert.equal(JSON.parse(s).display, "2");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "10");
    });

    it('should verify multiple operators', () => {
        let s = null;
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "-");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "2");
        assert.equal(JSON.parse(s).display, "2");
        s = calculator.calculateNextState(s, "*");
        assert.equal(JSON.parse(s).display, "3");
        s = calculator.calculateNextState(s, "4");
        assert.equal(JSON.parse(s).display, "4");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "12");
    });

    it('should verify multiplication by 0', () => {
        let s = null;
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "-");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
        s = calculator.calculateNextState(s, "*");
        assert.equal(JSON.parse(s).display, "0");
        s = calculator.calculateNextState(s, "4");
        assert.equal(JSON.parse(s).display, "4");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "0");
    });

    it('should verify a flow', () => {
        let s = null;
        s = calculator.calculateNextState(s, "1");
        assert.equal(JSON.parse(s).display, "1");
        s = calculator.calculateNextState(s, "2");
        assert.equal(JSON.parse(s).display, "12");
        s = calculator.calculateNextState(s, "+");
        assert.equal(JSON.parse(s).display, "12");
        s = calculator.calculateNextState(s, "4");
        assert.equal(JSON.parse(s).display, "4");
        s = calculator.calculateNextState(s, "3");
        assert.equal(JSON.parse(s).display, "43");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "55");
        s = calculator.calculateNextState(s, "+");
        assert.equal(JSON.parse(s).display, "55");
        s = calculator.calculateNextState(s, "1");
        assert.equal(JSON.parse(s).display, "1");
        s = calculator.calculateNextState(s, "=");
        assert.equal(JSON.parse(s).display, "56");
        s = calculator.calculateNextState(s, "5");
        assert.equal(JSON.parse(s).display, "5");
    });
});
