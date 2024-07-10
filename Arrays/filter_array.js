const sayThem = ['Jokes', 'Mars', 'extravagance', 'control', 'inquire', 'boy', 'rainbow'];

const output = sayThem.filter((word) => word.length > 5);

console.log(output); //result is [ 'extravagance', 'control', 'inquire', 'rainbow' ]

function greaterThan(value) {
    return value >= 12;
  }
const filtered = [12, 5, 8, 14, 36, 3, 130, 22, 44].filter(greaterThan);

  console.log(filtered); //result is [ 12, 14, 36, 130, 22, 44 ]

const age = [32, 12, 8, 27, 33, 16, 40, 5];
const result = age.filter(checkAdult);

function checkAdult(age) {
  return age >= 25;
}
console.log(result); // result is [ 32, 27, 33, 40 ]

const fruit = ["Avocado", "apple", "grapes", "banana", "oranges", "mango", "pears"];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruit, "p")); // result is [ 'apple', 'grapes', 'pears' ]
console.log(filterItems(fruit, "an")); // result is [ 'banana', 'oranges', 'mango' ]
