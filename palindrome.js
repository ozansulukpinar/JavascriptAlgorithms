//Take an input from user(make user enter an input) and decide if the inserted value is palindrome or not
//If the sentence or word is palindrom alert the user as “inputValue is palindrome”. If not alert the user as “inputValue is not palindrome”

//Hint: “step on no pets” is a palindrome sentence
//      “book” is not a palindrome word

var inputValue = 'step on no pets';

checkPalindrome(inputValue);

function checkPalindrome(inputValue) {
  var inputType = 'word';
  
  if(inputValue.indexOf(' ') >= 0)
    inputType = 'sentence';
    
  if (inputValue == inputValue.split('').reverse().join(''))
  {
        alert('"' + inputValue + '"' + ' is a palindrome ' + inputType + '.');
  }
  else{
        alert('"' + inputValue + '"' + ' is not a palindrome ' + inputType + '.');
  }
}
