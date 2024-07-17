let candy = [4, 8, 14, 25, 12];

function sumArray(candy, index) {
    if (index === candy.length) {
        return 0;
    }
    return candy[index] + sumArray(candy, index + 1);
}

console.log("Sum is " + sumArray(candy, 0)); //Sum is 63
