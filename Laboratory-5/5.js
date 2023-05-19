function bolt(a,b){
    return a+b;
}
const res = bolt(2,3); 
console.log(res)
function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
      return "Параметри повинні бути числовими";
    }
  
    return Math.pow(base, exponent);
  }