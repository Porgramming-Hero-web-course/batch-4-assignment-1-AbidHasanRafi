function sumArray(numbers: number[]): number {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));