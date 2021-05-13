//Find array that all duplicates are removed from an array of integers
//Return the array of the non duplicate numbers

var array = [87, 16, 1, 4, 74, 23, 6, 7, 11, 23, 11, 50, 62, 4, 8, 74, 19, 96, 11, 15];

findNonDuplicateNumbersArray(array);

function findNonDuplicateNumbersArray(array) {
    var nonDuplicateNumbersArray = [];

    array.forEach(function (number) {
        if (nonDuplicateNumbersArray.indexOf(number) === -1)
            nonDuplicateNumbersArray.push(number);
    })

    return nonDuplicateNumbersArray;
}