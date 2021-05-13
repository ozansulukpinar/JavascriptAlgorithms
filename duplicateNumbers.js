//Find all duplicate numbers in an array with multiple duplicates
//Return the array containing all duplicates found or empty array

var array = [1, 5, 8, 2, 3, 4, 5, 1, 5, 6, 7, 8, 9, 8, 5];

findDuplicateNumbersArray(array);

function findDuplicateNumbersArray(array) {
    var nonDuplicateNumbersArray = [];
    var duplicateNumbersArray = [];

    array.forEach(function (number) {
        if (nonDuplicateNumbersArray.indexOf(number) === -1) {
            nonDuplicateNumbersArray.push(number);
        }
        else {
            if (duplicateNumbersArray.indexOf(number) === -1)
                duplicateNumbersArray.push(number);
        }
    })

    return duplicateNumbersArray;
}