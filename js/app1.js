function getInputValue(text){
    let inputValue = parseFloat(prompt(text));
    while (isNaN(inputValue) || !Number.isInteger(inputValue)) {
        inputValue = parseInt(prompt("Ви ввели невірне значення. Введіть ціле число: "));
    }
    return inputValue;
}

const valueOfNum = getInputValue("Введіть ціле число, яке необхідно піднести до ступеня: ");
const valueOfDigit = getInputValue("Введіть ступінь: ");

function pow(num, degree){
    if (num === 0 && degree <= 0){
      return itIsError();
    }
    if (degree === 0){
        return 1;
    }
    if (degree > 0){
        return num * pow(num, degree - 1);
    } else {
        return 1 / (num * pow(num, -degree - 1));
    }
}
function itIsError(){
    console.log("Це значення неможливо розрахувати.");
}

const result = pow(valueOfNum, valueOfDigit);
console.log(`${valueOfNum} ^ ${valueOfDigit} = ${result}`);