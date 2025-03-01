//1-й пункт задания
function filterArray(arr, callback) {
    return arr.filter(callback);
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 !== 0;

alert("Четные числа: " + filterArray(array, isEven));
alert("Нечетные числа: " + filterArray(array, isOdd));
