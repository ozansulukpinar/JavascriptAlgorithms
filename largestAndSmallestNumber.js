//Find the largest and smallest number in an unsorted array of integers
//Return the largest and smallest number

var array = [17, 1, 24, 39, 8, 45, 83, 92, 56, 77];

findLargestAndSmallestNumber(array);

function findLargestAndSmallestNumber(array) {
    array.sort(function (a, b) {
        return a - b;
    });

    var smallestNumber = array[0];
    var largestNumber = array[(array.length - 1)];

    var numbers = { minimumValue: smallestNumber, maximumValue: largestNumber };

    return numbers;
}