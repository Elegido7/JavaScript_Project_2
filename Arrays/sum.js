const sum = array => eval(array.join('+'));
const array = [12, 23, 3, 6, 35];

console.log(sum(array)); // result is 79


let arr1 = [4, 8, 14, 25, 12];

function sumArray(arr1, index) {
    if (index === arr1.length) {
        return 0;
    }
    return arr1[index] + sumArray(arr1, index + 1);
}

console.log("Sum is " + sumArray(arr1, 0)); //Sum is 63


let myNums = [27, 22, 33, 14, 5];

let add = 0;

for (let i = 0; i < myNums.length; i++ ) {
  add += myNums[i];
}

console.log(add) // result is 101