function checkPalindrome() {
  const userInput = document.getElementById('text-input').value.toUpperCase();
  var resultElement = document.getElementById('result');

  if (userInput === '') {
    alert('Please input a value');
    return;
  }

  // Remove non-alphanumeric characters from the input
  var cleanedInput = userInput.replace(/[^a-zA-Z0-9]/g, '');

  // Check if the cleaned input is a palindrome
  var isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

  if (isPalindrome) {
    resultElement.textContent = userInput + ' is a palindrome';
  } else {
    resultElement.textContent = userInput + ' is not a palindrome';
  }
}