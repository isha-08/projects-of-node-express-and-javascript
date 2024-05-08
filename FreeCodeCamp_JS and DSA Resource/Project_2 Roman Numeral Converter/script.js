const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRoman = (num) => {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let romanNumber = "";
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      romanNumber += key;
      num -= romanNumerals[key];
    }
  }
  return romanNumber;
};

const checkUserInput = () => {
  const num = parseInt(numberInput.value);

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number";
  } else if (num < 1) {
    result.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    result.textContent = "Please enter a number less than or equal to 3999";
  } else {
    result.textContent = convertToRoman(num);
  }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});