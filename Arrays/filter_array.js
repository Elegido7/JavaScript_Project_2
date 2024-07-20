function greaterThan(value) {
  return value >= 12;
}
const filtered = [12, 5, 8, 14, 36, 3, 130, 22, 44].filter(greaterThan);

console.log(filtered); //result is [ 12, 14, 36, 130, 22, 44 ]

let fruit = ['Avocado', 'apple', 'grapes', 'banana', 'oranges', 'mango', 'pears'];

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruit, 'p')); // result is [ 'apple', 'grapes', 'pears' ]
console.log(filterItems(fruit, 'an')); // result is [ 'banana', 'oranges', 'mango' ]
