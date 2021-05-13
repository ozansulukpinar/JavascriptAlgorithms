//Find array showing the cumulative sum at each index of an array of integers
//Return the array of the cumulative sum at each index

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

findCumulativeSumArray(array);

function findCumulativeSumArray(array) {
    var cumulativeSumArray = [];
    var lengthOfArray = array.length;
    var sum = 0;

    for (var i = 0; i < lengthOfArray; i++) {
        sum = 0;
        for (var j = 0; j <= i; j++) {
            sum += array[j];
        }
        cumulativeSumArray.push(sum);
    }

    return cumulativeSumArray;
}