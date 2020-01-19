/*
    Really weird challenge where a simple mathematical operation is performed by nesting function calls.
        eg. one(plus(five())) = 6
 */

function zero(operation={term : [0]}) {return operation.op?reduceTerm(addTo(operation,0)):operation}
function one(operation={term : [1]}) {return operation.op?reduceTerm(addTo(operation,1)):operation}
function two(operation={term : [2]}) {return operation.op?reduceTerm(addTo(operation,2)):operation}
function three(operation={term : [3]}) {return operation.op?reduceTerm(addTo(operation,3)):operation}
function four(operation={term : [4]}) {return operation.op?reduceTerm(addTo(operation,4)):operation}
function five(operation={term : [5]}) {return operation.op?reduceTerm(addTo(operation,5)):operation}
function six(operation={term : [6]}) {return operation.op?reduceTerm(addTo(operation,6)):operation}
function seven(operation={term : [7]}) {return operation.op?reduceTerm(addTo(operation,7)):operation}
function eight(operation={term : [8]}) {return operation.op?reduceTerm(addTo(operation,8)):operation}
function nine(operation={term : [9]}) {return operation.op?reduceTerm(addTo(operation,9)):operation}

function plus(operand) {
    operand.op= "+"
    return operand
}
function minus(operand) {
    operand.op= "-"
    return operand
}
function times(operand) {
    operand.op= "*"
    return operand
}
function dividedBy(operand){
    operand.op= "/"
    return operand
}

function addTo(object, num){
    object.term.unshift(num);
    return object;
}

function reduceTerm(term){
    return term.term.reduce((a,b) => {
        switch(term.op){
            case '+':
                return a+b
                break;
            case '-':
                return a-b
                break;
            case '*':
                return a*b
                break;
            case '/':
                return Math.floor(a/b)
                break;
            default:
                return a+b
        }
    })
}