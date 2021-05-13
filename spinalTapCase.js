//Find the spinal tap case sentence
//Return the string to a spinal case

var string = "This-IsA String";

findSpinalTapCaseSentence(string);

function findSpinalTapCaseSentence(string) {
    var stringArray = [];
    var asciiCodeArray = [];
    var newAsciiCodeArray = [];

    stringArray = string.split('');

    stringArray.forEach(function (item) {
        var charCode = item.charCodeAt(0);
        asciiCodeArray.push(charCode);
    })

    var lengthOfArray = asciiCodeArray.length;

    for (var i = 0; i < lengthOfArray; i++) {
        var newItem = asciiCodeArray[i];

        if (asciiCodeArray[i] == 32)
            newItem = asciiCodeArray[i] + 13;

        if (asciiCodeArray[i] >= 65 && asciiCodeArray[i] <= 90)
            newItem = asciiCodeArray[i] + 32;

        if (i > 0) {
            if (asciiCodeArray[i] >= 65 && asciiCodeArray[i] <= 90) {
                if (!(asciiCodeArray[i - 1] == 32 || asciiCodeArray[i - 1] == 45))
                    newAsciiCodeArray.push(45);
            }
        }

        newAsciiCodeArray.push(newItem);
    }

    var newString = String.fromCharCode.apply(null, newAsciiCodeArray);

    return newString;
}