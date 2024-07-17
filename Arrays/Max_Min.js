let digits = [5, 32, 16, 25, 44, 7, 80, 18];
function number() {

    let minValue = Math.min(...digits);
    let maxValue = Math.max(...digits);

    console.log  ("Minimum value is:" + minValue); //result is Minimum value is:5
    console.log  ("Maximum value is:" + maxValue); //result is Maximum value is:80
}
number();


function StudentMarks() {
    let student = [78, 64, 44, 80, 20, 34, 48, 95];
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (let item of student) {
        
        if (item < minValue)
            minValue = item;
       
        if (item > maxValue)
            maxValue = item;}

    console.log("Minimum marks is:" + minValue); //result is Minimum marks is:20
    console.log("Maximum marks is:" + maxValue); //result is Maximum marks is:95
}

StudentMarks();
