let calculator = {};

calculator.calculateNextState = function(jsonState, input) {
    var state = {}
    if (jsonState != null) {
        state = JSON.parse(jsonState)
        if(['*', '-', '/', '+', '='].indexOf(input) >= 0) {
            if(input == '=') {
                state.resetAfterDisplay = true
                if(state.lastResult != null) {
                    state.display = eval(state.lastResult + state.previousOperator + state.display)
                    state.lastResult = null
                    state.previousOperator = null
                }
            }
            else {
                if(state.lastResult == null) {
                    state.previousOperator = input
                }
                else {
                    state.display = eval(state.lastResult + state.previousOperator + state.display)
                    state.previousOperator = input
                    state.lastResult = null
                }
            }
        }
        else {
            if(state.lastResult == null && state.previousOperator != null) {
                state.lastResult = state.display
                state.display = input
            }
            else {
                if(state.resetAfterDisplay) {
                    state.display = input
                    state.resetAfterDisplay = false
                }
                else {
                    state.display += input
                }
            }
        }
    }
    else {
        state.lastResult = null
        state.previousOperator = null
        state.resetAfterDisplay = false
        if(['*', '-', '/', '+', '='].indexOf(input) >= 0) {
            state.display = ""
        }
        else {

            state.display = input
        }
    }
    return JSON.stringify(state)
}

module.exports = calculator;

