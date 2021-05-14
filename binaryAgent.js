//Find the translated sentence converted from binary string
//Return the translated sentence

var string = "01001000 01100101 01101100 01101100 01101111 00100001";

findTranslatedSentence(string);

function findTranslatedSentence(string) {
    var stringArray = string.split(' ');
    var translatedSentenceArray = [];
    var translatedSentence = "";

    stringArray.forEach(function (element) {
        translatedSentenceArray.push(String.fromCharCode(parseInt(element, 2)));
    });

    translatedSentenceArray.forEach(function (element) {
        translatedSentence += element;
    });

    return translatedSentence;
}