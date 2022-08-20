function formatPenceToPounds(a) {

    return "£" + (a / 100);
}
let a = 155;
console.log(formatPenceToPounds(a));

function increaseByHalf(b) {

    return b * 1.5;
}
let b = 100;

console.log(increaseByHalf(b));

let pocketMoney = 413;

let myNewPence = increaseByHalf(pocketMoney);

let myNewPocketMoney = formatPenceToPounds(myNewPence);

console.log(myNewPocketMoney);

function printMessage(x) {
    console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
    return "Hello, nice to meet you " + name;
}

printMessage("Mitch");

printMessage("August");

getMessage("Laetitia");