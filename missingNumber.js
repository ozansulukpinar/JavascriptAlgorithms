//Find the missing number in a given integer array of 1 to 100
//Return the missing number

var array = [1, 2, 3, 4, 6, 7, 8, 9];

findMissingNumber(array);

function findMissingNumber(array) {
    array.sort(function (a, b) {
        return a - b;
    });

    for (var i = 1; i <= (array.length + 1); i++) {
        if (array[(i - 1)] != i)
            return i;
    }
}