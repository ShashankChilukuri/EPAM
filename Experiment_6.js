const numbers = [1, -2, 3, 4, -5, 6, 7, -8, 9, -10];

function filterArray() {
    const filteredArray = numbers.filter(num => num >= 0);
    return filteredArray;
}

const result = filterArray();
console.log("Filtered Array:", result);
