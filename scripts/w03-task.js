/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
document.querySelector('#addNumbers').addEventListener('click',function(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add (addNumber1, addNumber2);
});

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
document.querySelector('#subtractNumbers').addEventListener('click',function(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract (subtractNumber1, subtractNumber2);
});

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2){
    return number1 * number2;
}
document.querySelector('#multiplyNumbers').addEventListener('click',function(){
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply (multiplyNumber1, multiplyNumber2);
});

/* Open Function Use - Divide Numbers */
function division (number1, number2){
    return number1 / number2;
}
document.querySelector('#divideNumbers').addEventListener('click',function(){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = division (divideNumber1, divideNumber2);
});

/* Decision Structure */

const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0).join(', ');

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0).join(', ');

/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfArray').innerHTML = sumArray;

/* Output Source Array Times Two */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipliedArray;
