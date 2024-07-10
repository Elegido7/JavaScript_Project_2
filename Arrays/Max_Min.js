function number() {
    let Arr = [5, 32, 16, 25, 44, 7, 80, 18];

    let minValue = Math.min(...Arr);
    let maxValue = Math.max(...Arr);
    
    console.log("Minimum value is:" + minValue); //result is Minimum value is:5
    console.log("Maximum value is:" + maxValue); //result is Maximum value is:80
}
number()

function StudentMarks() {
    let Arr = [78, 64, 44, 80, 20, 34, 48, 95];
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (let item of Arr) {
        
        if (item < minValue)
            minValue = item;
       
        if (item > maxValue)
            maxValue = item;    }

    console.log("Minimum marks is:" + minValue); //result is Minimum marks is:20
    console.log("Maximum marks is:" + maxValue); //result is Maximum marks is:95
}

StudentMarks();

let den = [62, 47, 85, 62, 22, 15, 43, 36];

let minValue = den.reduce((acc, current) => Math.min(acc, current));

let maxValue = den.reduce((acc, current) => Math.max(acc, current));

 console.log("Minimum element is:" + minValue); //result is Minimum element is:15
 console.log("Maximum element is:" + maxValue); //result is Maximum element is:85

 const trophies = [20, 12, 25, 16, 8, 22, 14];

const minwins = Math.min(...trophies);
console.log('Minimum Element:', minwins); //result is Minimum Element: 8

const maxwins = Math.max(...trophies);
console.log('Maximum Element:', maxwins); //result is Maximum Element: 25