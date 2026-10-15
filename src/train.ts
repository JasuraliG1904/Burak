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
// function calculate(str: string): number {
//   return str.split('+').reduce((sum: number, item: string) => sum + Number(item), 0);
// }

// Testlar:
// console.log(calculate("1+3"));  
// console.log(calculate("10+20")); 

// S task
// function missingNumber(nums: number[]): number {
//     const n: number = nums.length;
    
//     // 0 dan n gacha bo'lgan ideal sonlar yig'indisi: (n * (n + 1)) / 2
//     const expectedSum: number = (n * (n + 1)) / 2;
    
//     // Massivdagi bor sonlarning haqiqiy yig'indisi
//     const actualSum: number = nums.reduce((sum: number, num: number) => sum + num, 0);
    
//     // Tushib qolgan son
//     return expectedSum - actualSum;
// }

// // Tekshirish:
// console.log(missingNumber([3, 0, 1]));       // Javob: 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Javob: 8
// console.log(missingNumber([0, 1]));          // Javob: 2

// T-task
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//     const merged: number[] = [];
//     let i = 0;
//     let j = 0;

//     // Ikkala array elementlarini solishtirib, kattagina/kichigini qo'shib boramiz
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             merged.push(arr1[i]);
//             i++;
//         } else {
//             merged.push(arr2[j]);
//             j++;
//         }
//     }

//     // Birinchi arrayda qolgan elementlar bo'lsa, qo'shamiz
//     while (i < arr1.length) {
//         merged.push(arr1[i]);
//         i++;
//     }

//     // Ikkinchi arrayda qolgan elementlar bo'lsa, qo'shamiz
//     while (j < arr2.length) {
//         merged.push(arr2[j]);
//         j++;
//     }

//     return merged;
// }

// // Sinov uchun:
// const array1 = [0, 3, 4, 31];
// const array2 = [4, 6, 30];

// console.log(mergeSortedArrays(array1, array2)); 
// // Natija: [0, 3, 4, 4, 6, 30, 31]

// U-task
// function sumOdds(n: number): number {
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         if (i % 2 !== 0) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(sumOdds(9));  
// console.log(sumOdds(11)); 

// V -task

function countChars(str: string) {
    const charMap: any = {};

    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    return charMap;
}

// Tekshirish:
console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }




