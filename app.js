function isTriangle(a, b, c) {
    let myArr = [a, b, c]; // put into an array to sort
    myArr.sort(function (a, b) { // sort in ascending
        return a - b;
    }); // if the 1st two nums are greater than the last..
    if (myArr[0] + myArr[1] > myArr[2]) {
        return true;
    } else {
        return false;
    }
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
console.log(isTriangle(7, 6, 3)); // true
console.log(isTriangle(9, 8, 8)); // true
console.log(isTriangle(6, 3, 4)); // true