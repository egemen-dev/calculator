const calculateButton = document.querySelector(".calculate")
const screenDown = document.querySelector(".screen-down")
const allButtons = document.querySelector(".buttons-div")
const operators = document.querySelector(".operators")
const allNums = document.querySelector(".num-related")
const ACButton = document.querySelector(".AC")
const screen = document.querySelector(".screen")
const body = document.querySelector("body")


// body.addEventListener("keydown", function(e) {
//     input.push(e.key)
//     noComa = input.join("")
//     console.log(screen.innerText = noComa)
// });


// inputArray gets the input before and after (operator sign) clicked. When operator clicked, the value being sent
// to the acitonsArray.
var inputArray = []

// actionsArray used as a final array, contains Number and (operator sign) as a String.
var actionsArray = []

function input(){
    allNums.addEventListener("click", function(e) {

        buttonValue = e.target.id
        inputArray.push(buttonValue)

        // Gets rid of the comas inside inputArray before turn the input to a Number. 
        joinedInputArray = inputArray.join("")
        console.log(joinedInputArray)
        console.log("screen:", screen.innerText = screen.innerText + buttonValue)
    });  
};


console.log(input())


function operatorSign(){
    operators.addEventListener("click", function(e){

        // (String -> Number) When any operator sign is clicked, joinedInputArray[0] turns to Number.
        finalInput = Number(joinedInputArray)
        // It is ready to be used in final step, so I store the it in actionsArray.
        actionsArray.push(finalInput)
        // Clean the inputArray.
        inputArray = []

        signInput = e.target.id
        console.log("for function", signInput)
        actionsArray.push(signInput)
        console.log(screen.innerText = screen.innerText + signInput)
        console.log(actionsArray)
    });
};
console.log(operatorSign())
    
    
function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return a / b};

function operate(a, operator, b){
    
    if (operator == "+") {return add(a,b)} 
    else if (operator == "-") {return subtract(a,b)}
    else if (operator == "*") {return multiply(a,b)}
    else if (operator == "/") {return divide(a,b)}
};


calculateButton.addEventListener("click", function(){

    // (String -> Number) When "=" is clicked, joinedInputArray[0] turns to Number.
    finalInput = Number(joinedInputArray)

    // It's ready to be used in final, so I append finalInput to the actionsArray after the operator sign.
    actionsArray.push(finalInput)
    finalInput = []
    inputArray = []
    console.log(inputArray, finalInput)
    
    a = actionsArray[0]
    b = actionsArray[2]
    operator = actionsArray[1]
    result = operate(a, operator, b)

    screen.innerText = result

    // Clean the actionsArray.
    actionsArray = []

    inputArray.push(result)
    console.log(actionsArray)

});


// Clean all existing Data.
ACButton.addEventListener("click", function() {

    inputArray = []
    finalInput = []
    actionsArray = []
    joinedInputArray = []
    screen.innerText = ""

});
