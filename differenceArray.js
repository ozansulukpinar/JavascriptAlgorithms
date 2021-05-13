//Find the difference of two arrays
//Return the array with any items only found in one of the two given arrays

var array1 = [1, 2, 3, 4, 5];
var array2 = [1, 2, 3, 6, 7];

findDifferenceOfArrays(array1, array2);

function findDifferenceOfArrays(array1, array2) {
    var differenceArray = [];

    array1.forEach(function (number) {
        if (array2.indexOf(number) === -1)
            differenceArray.push(number);
    })

    array2.forEach(function (number) {
        if (array1.indexOf(number) === -1)
            differenceArray.push(number);
    })

    return differenceArray;
}