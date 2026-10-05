// const getSquareNumbers = (arr: number[]): { number: number; square: number }[] => {
//     return arr.map(num => ({
//         number: num,
//         square: num ** 2
//     }));
// };


// const numbers: number[] = [1, 2, 3];
// const result = getSquareNumbers(numbers);
// console.log(result);


// N task
// function palindromCheck(str: string): boolean {
//     const reversed: string = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false
// console.log(palindromCheck("aziza")); // true

// task o
// function calculateSumOfNumbers(result: any[]): number {
//     return result.reduce((sum: number, item: any) => {
//         return typeof item === 'number' ? sum + item : sum;
//     }, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35, 5]));

// task p
// function objectToArray(obj: Object) {
//     return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

/*

VPS - virtual priv server. 1ta yacheyka, scan qilib bolmaydi
VPC - Virtual p. cloud. yacheykalar toplami

nodejs- client serverdir, markaziydir
peer-to-peer - db -1joyda bolmaydi, 1ta ozgarsa, qolganlari qayta holiga qaytaradi.
autherication.: Sessions(cookies)da, tokens(cookies)da, tokens(headers)da saqalashda ishladamiz
*/

// Q-task
// function hasProperty(obj: Object, prop: string): boolean {
//     return prop in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// R-task
function calculate(str: string): number {
  return str.split('+').reduce((sum: number, item: string) => sum + Number(item), 0);
}

// Testlar:
console.log(calculate("1+3"));  
console.log(calculate("10+20")); 