document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const checkBtn = document.getElementById('check-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsDiv = document.getElementById('results-div');

  function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-])?\d{3}([\s.-])?\d{4}$/;
    return phoneRegex.test(phoneNumber);
  }

  checkBtn.addEventListener('click', () => {
    const phoneNumber = userInput.value.trim();
    if (phoneNumber === '') {
      alert('Please provide a phone number');
      return;
    }
    const isValid = validatePhoneNumber(phoneNumber);
    if (isValid) {
      resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
  });

  clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
  });
});
