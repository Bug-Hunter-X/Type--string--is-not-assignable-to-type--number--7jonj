function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function safeAdd(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both parameters must be numbers.");
    return 0; // or throw an error
  }
}

const result1 = add(5, 3); // result1 will be 8
const result2 = subtract(10, 4); // result2 will be 6
const result3 = safeAdd(5, '3'); // result3 will be 0 and print error
const result4 = safeAdd(5,3); // result4 will be 8
console.log(result1, result2, result3, result4); // Output: 8 6 0 8