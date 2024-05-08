const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const inputText = textInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!inputText) {
    alert('Please input a value');
    return;
  }

  const reversedText = inputText.split('').reverse().join('');
  if (inputText === reversedText) {
    result.textContent = `${textInput.value} is a palindrome`;
  } else {
    result.textContent = `${textInput.value} is not a palindrome`;
  }
});
