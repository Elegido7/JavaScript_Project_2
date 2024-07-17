function Letter(string) {    
    return string[0].toUpperCase() + string.slice(1);
}

console.log(Letter('mambosawa')); //result is Mambosawa

let matunda ='pineapple';

function fruit() {
    return matunda.charAt(0).toUpperCase() +
        matunda.slice(1);
}
console.log(fruit) //result is Pineapple