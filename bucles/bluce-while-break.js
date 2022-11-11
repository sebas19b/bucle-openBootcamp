var factorial = 1;
var n = 10;

while(true){
  
  factorial = factorial * n;
  n--;
	if(n == 0){
      break;
    }
}
console.log(`Factorial: ${factorial}`)