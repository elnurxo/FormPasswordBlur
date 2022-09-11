const passwordInput = document.querySelector("#password");
const container = document.querySelector("#root");

const SPECIAL_CHARACTERS = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "@",
  "[",
  "]",
  "^",
  "-",
  "{",
  "|",
  "`",
  "}",
  "~",
];

const UPPERCASE_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const onPasswordChange = (e) => {
  if (!e.target.value) return;
  blurValue = 40;
  blurValue -= checkPasswordLength(e.target.value);
  blurValue -= checkIfArrayContains(e.target.value, SPECIAL_CHARACTERS);
  blurValue -= checkIfArrayContains(e.target.value, UPPERCASE_LETTERS);
  blurValue -= checkIfArrayContains(e.target.value, NUMBERS);
  container.style.filter = `blur(${blurValue || 0}px)`;
};

const checkPasswordLength = (value) => {
  return value.length >= 8 ? 10 : 0;
};

const checkIfArrayContains = (value, array) => {
  for (let char of array) {
    if (value.includes(char)) {
      return 10;
    }
  }
  return 0;
};

passwordInput.addEventListener("onchange", (e) => {
  console.log(e.target.value);
});

passwordInput.addEventListener("keyup", onPasswordChange);
