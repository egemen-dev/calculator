const calculateButton = document.querySelector(".calculate")
const operators = document.querySelector(".operators")
const allNums = document.querySelector(".num-related")
const backSpace = document.querySelector(".backspace")
const ACButton = document.querySelector(".AC")
const screen = document.querySelector(".screen")
const body = document.querySelector("body")


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
        screen.innerText = screen.innerText + buttonValue

        console.log("inputArray:", inputArray)
        console.log("joinedInputArray:", joinedInputArray)

    });  
};


function operatorSign(){
    operators.addEventListener("click", function(e){
        
        // (String -> Number) When any operator sign is clicked, joinedInputArray[0] turns to Number.
        if (joinedInputArray.length !== 0)  {
            console.log(joinedInputArray.length)
            finalInput = Number(joinedInputArray)
            // It is ready to be used in final step, so I store the it in actionsArray.
            actionsArray.push(finalInput)
        };

        // Clean the arrays.
        finalInput = []
        inputArray = []
        joinedInputArray = []

        signInput = e.target.id
        actionsArray.push(signInput)
        screen.innerText = screen.innerText + signInput
        
        console.log("actionsArray:", actionsArray)
        // Calculator only evaluates single pair of number at a time. 
        
        if (actionsArray.length > 3) {
            a = actionsArray[0]
            b = actionsArray[2]
            operator = actionsArray[1]
            result = operate(a, operator, b)
            
            screen.innerText = result
            
            // Clean the first two arrays for fresh input after the calculation.
            actionsArray = []
            
            actionsArray.push(result)
            actionsArray.push(signInput)
            screen.innerText = result + signInput
            console.log("acitonsArray:", actionsArray)
        }
    });
};


calculateButton.addEventListener("click", function(){

    console.log("inputArray:", inputArray)
    console.log("joinedInputArray:", joinedInputArray)
    console.log("finalInput:", finalInput)
    console.log("actionsArray:", actionsArray)
    
    // (String -> Number) When "=" is clicked, joinedInputArray[0] turns to Number.
    finalInput = Number(joinedInputArray)
    
    // It's ready to be used in final, so I append finalInput to the actionsArray after the operator sign.
    actionsArray.push(finalInput)
    console.log("actionsArray:", actionsArray)

    // Clean the arrays.
    finalInput = []
    inputArray = []
    joinedInputArray = []
    
    a = actionsArray[0]
    b = actionsArray[2]
    operator = actionsArray[1]
    result = operate(a, operator, b)
    
    screen.innerText = result
    
    // Clean the actionsArray.
    actionsArray = []
    console.log("actionsArray:", actionsArray)
    inputArray.push(result)
    actionsArray.push(result)

    console.log("actionsArray:", actionsArray)
});


// Clean all existing Data.
ACButton.addEventListener("click", function() {
    
    inputArray = []
    finalInput = []
    actionsArray = []
    joinedInputArray = []
    screen.innerText = ""
    
});


backSpace.addEventListener("click", function() {

    console.log("inputArray:", inputArray)
    console.log("joinedInputArray:", joinedInputArray)
    console.log("actionsArray:", actionsArray)
    
    joinedInputArray = []
    console.log(inputArray.pop())
    console.log(actionsArray.pop())

    console.log(actionsArray[actionsArray.length-1])
    screen.innerText = actionsArray.join("")
    
    console.log("inputArray:", inputArray)
    console.log("actionsArray:", actionsArray)
});


function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return +((a / b).toFixed(2))};

function operate(a, operator, b){
    if (operator == "+") {return add(a,b)} 
    else if (operator == "-") {return subtract(a,b)}
    else if (operator == "*") {return multiply(a,b)}
    else if (operator == "/") {return divide(a,b)}
};

input()
operatorSign()
