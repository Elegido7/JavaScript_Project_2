const publish = "gomyCode";
const capitalizedPrint = publish[0].toUpperCase() + publish.substring(1);
console.log(capitalizedPrint); //result is GomyCode

const gadget= "computer power";
const capitalizedResult = gadget[0].toUpperCase() + gadget.substring(1);
console.log(capitalizedResult);//result is Computer power

function Letter() {
    let string = 'mambosawa';
    console.log(string[0].toUpperCase() + string.slice(1));
}
Letter(); //result is Mambosawa

function fruit() {
    let string = 'pineapple';
    console.log(string.charAt(0).toUpperCase() +
        string.slice(1));
}
fruit() //result is Pineapple