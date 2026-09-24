const getSquareNumbers = (arr: number[]): { number: number; square: number }[] => {
    return arr.map(num => ({
        number: num,
        square: num ** 2
    }));
};


const numbers: number[] = [1, 2, 3];
const result = getSquareNumbers(numbers);
console.log(result);
