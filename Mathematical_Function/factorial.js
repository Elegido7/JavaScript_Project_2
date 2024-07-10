function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(3));// result is 6

function factor(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  console.log(factor(6)); // result is 720

  let n = 10; 

  function factorial(n) { 
      let ans = 1; 
      
      if(n === 0)
          return 1;
      for (let i = 2; i <= n; i++) 
          ans = ans * i; 
      return ans; 
  }
  
  console.log(factorial(n)); // result is 3628800
  