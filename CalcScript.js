const numbersBtn = document.querySelectorAll(".number");
const operatorsBtn = document.querySelectorAll(".operator");

const equaltoBtn = document.querySelector(".equal-to");
const clearBtn = document.querySelector(".clear");
const deleteLastBtn = document.querySelector(".delete");
const plusMinusBtn = document.querySelector(".plus-minus");
const dotBtn = document.querySelector(".dot");
let display = document.querySelector(".display");
let output = document.querySelector(".output");

let num1 = "";
let num2 = "";
let operator = "";

numbersBtn.forEach((number) => {
  number.addEventListener(
    "click",
    () => (display.innerText += number.innerText)
  );
});

operatorsBtn.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (num1 !== "") return;
    if (num2 !== "") {
      mathOperation(operator, num1, num2);
    }
    display.innerText = operator.innerText;
  });
});

function mathOperation(operator, num1, num2) {
  if (operator.innerText === "×") {
    operator = parseFloat(num1) * parseFloat(num2);
  } else if (operator.innerText === "-") {
    operator = parseFloat(num1) - parseFloat(num2);
  } else if (operator.innerText === "+") {
    operator = parseFloat(num1) + parseFloat(num2);
  } else if (operator.innerText === "÷") {
    operator = parseFloat(num1) / parseFloat(num2);
  } else if (operator.innerText === "%") {
    operator = parseFloat(num1) % parseFloat(num2);
  }
}

equaltoBtn.addEventListener("click", () => {
  if (output.innerText !== "") {
    display.innerText = output.innerText;
    output.innerHTML = "";
  }
});
