const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    return ![...Array(num).keys()].slice(2).some(i => num % i === 0);
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(8)); // false
console.log(isPrime(19)); // true
console.log(isPrime(25)); // false

function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(3); // 3  is a prime number.
checkPrime(14);//14  is not a prime number.

function checkPrime(num){
    let res = true;
    if(num<=1){
        res = false;
    }

    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            res = false;
            break;
        }
    }
    if(res){
        console.log(num, " is a prime number.");
    }
    else{
        console.log(num, " is not a prime number.");
    }
}
checkPrime(22); //22 is not a prime number.
checkPrime(17);//17 is a prime number.