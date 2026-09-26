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
function palindromCheck(str: string): boolean {
    const reversed: string = str.split('').reverse().join('');
    return str === reversed;
}

console.log(palindromCheck("dad")); // true
console.log(palindromCheck("son")); // false
console.log(palindromCheck("aziza")); // true