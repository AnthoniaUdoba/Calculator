const numberButtons = document.querySelectorAll(".numbers");
const operatorButton = document.querySelectorAll(".operator");

const equalto = document.querySelector(".equal-to");
const clearAll = document.querySelector(".all-clear");
const deleteLast = document.querySelectorAll(".delete");
const plusMinus = document.querySelectorAll(".plus-minus");

const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");

class Calculator {
  constructor(display1, display2) {
    this.display1 = display2;
    this.display2 = display1;
    this.clear();
  }
  clear() {
    this.dis2 = "";
    this.dis1 = "";
    this.operator = undefined;
  }
}
const calculator = new Calculator(display1, display2);

numberButtons.forEach((numbers) => {
  numbers.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
