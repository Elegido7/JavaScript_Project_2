let student = 'James, Mercy, Agnes, Brain, Daniel, Jane, Paul';
let splitstudent = student.split(',')
console.log(splitstudent.reverse()); //[' Paul', ' Jane', ' Daniel', ' Brain', ' Agnes',  ' Mercy', 'James']
  
let student1 = 'James, Mercy, Agnes, Brain, Daniel, Jane, Paul';
let splitstudent1 = student1.split(',') 
let splitstudent2 = student1.split('') 
let splitstudent3 = student.split(' ')
  
console.log(splitstudent1.reverse()); //[' Paul', ' Jane', ' Daniel', ' Brain', ' Agnes',  ' Mercy', 'James']

console.log(splitstudent2.reverse()); //['l', 'u', 'a', 'P', ' ', ',', 'e', 'n', 'a', 'J', ' ', ',', 'l', 'e', 'i', 'n', 'a', 'D', ' ', ',', 'n', 'i', 'a', 'r', 'B', ' ', ',', 's', 'e', 'n', 'g', 'A', ' ', ',', 'y', 'c', 'r', 'e', 'M', ' ', ',', 's', 'e', 'm', 'a', 'J']

console.log(splitstudent3.reverse()); //['Paul', 'Jane,', 'Daniel,', 'Brain,', 'Agnes,',  'Mercy,', 'James,']