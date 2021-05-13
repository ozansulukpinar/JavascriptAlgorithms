//Find a duplicate number in an array of integers
//Return the duplicate number
//If there is no duplicate, return false

var array = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9];

findDuplicateNumber(array);

function findDuplicateNumber(array) {
    var newArray = [];
    var numberOfDuplicated = 0;

    array.forEach(function (number) {
        if (newArray.indexOf(number) !== -1) {
            numberOfDuplicated++;
            return number;
        }

        newArray.push(number);
    })

    if (numberOfDuplicated == 0) {
        return false;
    }
}