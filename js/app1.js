function getInputValue(text) {
    let inputValue = parseFloat(prompt(text));
    while (isNaN(inputValue) || inputValue % 1 !== 0) {
        inputValue = parseFloat(prompt("Ви ввели невірне значення. Введіть ціле число: "));
    }
    return inputValue;
}

const valueOfNum = getInputValue("Введіть ціле число, яке необхідно піднести до ступеня: ");
const valueOfDegree = getInputValue("Введіть ступінь: ");

function pow(num, degree) {
    if (num === 0 && degree <= 0) {
        return false;
    }
    if (degree === 0) {
        return 1;
    }
    if (degree > 0) {
        return num * pow(num, degree - 1);
    } else {
        return 1 / (num * pow(num, -degree - 1));
    }
}

const result = pow(valueOfNum, valueOfDegree);
if (result === false) {
    console.log("Це значення неможливо розрахувати.");
} else {
    console.log(`${valueOfNum} ^ ${valueOfDegree} = ${result}`);
}
