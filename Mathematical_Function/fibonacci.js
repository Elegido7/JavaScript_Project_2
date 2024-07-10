function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(3): " + fibonacci(3)); //result is Fibonacci(3): 1
console.log("Fibonacci(12): " + fibonacci(12)); // result is Fibonacci(12): 89

function* fibonacciGen(num) {
    let num1 = 0;
    let num2 = 1;
    yield num1;
    yield num2;
    for (let i = 3; i <= num; i++) {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        yield num2;
    }
}
function dennis (num) {
    let result;
    const iterator = fibonacciGen(num);
    for (let i = 0; i < num; i++) {
        result = iterator.next().value;
    }
    return result;
}

console.log("Fibonacci(5): " + dennis(5)); // result is Fibonacci(5): 3
console.log("Fibonacci(8): " + dennis(8)); // result is Fibonacci(8): 13

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(7): " + fibonacci(7)); //result is Fibonacci(7): 8
console.log("Fibonacci(15): " + fibonacci(15)); //result is Fibonacci(15): 377
