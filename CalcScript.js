const numbersBtn = document.querySelectorAll(".numbers");
const operatorsBtn = document.querySelectorAll(".operators");

const equaltoBtn = document.querySelector(".equal-to");
const clearBtn = document.querySelector(".clear");
const deleteLastBtn = document.querySelectorAll(".delete");
const plusMinusBtn = document.querySelectorAll(".plus-minus");
const dotBtn = document.querySelector(".dot");
const displayBtn = document.querySelector(".display");
const outputBtn = document.querySelector(".output");

let equalPressed = 0;
let result = "";
let display = "";
let lastOperator = "";
let n1 = "";
let n2 = "";

numbersBtn.forEach((numbers) => {
  numbers.addEventListener("click", () => {
    if (equalPressed == 1) {
      displayBtn.textContent = "";
      equalPressed = 0;
    }
    displayBtn.textContent += numbers.textContent;
  });
});

operatorsBtn.forEach((operators) => {
  operators.addEventListener("click", (e) => {
    const chooseOperation = e.target.innerText;
    if (n1 !== "" && n2 !== "") {
      mathOperation();
    }
    lastOperator = chooseOperation;
    this.n1 = this.n2;
    this.n2 = "";
  });
});

function mathOperation() {
  if (lastOperator === "×") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (lastOperator === "+") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (lastOperator === "-") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (lastOperator === "/") {
    result = parseFloat(n1) / parseFloat(n2);
  } else if (lastOperator === "÷") {
    result = parseFloat(n1) % parseFloat(n2);
  }
}

equaltoBtn.addEventListener("click", () => {
  if (outputBtn.textContent !== "") {
    displayBtn.textContent = outputBtn.textContent;
    outputBtn.textContent = "";
    equalPressed = true;
  }
});

clearBtn.addEventListener("click", () => {
  equalPressed = 0;
  displayBtn.textContent = "";
  outputBtn.textContent = "";
});

deleteLastBtn.addEventListener("click", () => {
  displayBtn.textContent = displayBtn.textContent.toString().slice(0, -1);
  display = "";
});

dotBtn.addEventListener("click", function () {
  if (equalPressed) {
    displayBtn.textContent = "";
    equalPressed = false;
  }
});
