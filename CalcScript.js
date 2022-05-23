const numberButtons = document.querySelectorAll(".numbers");
const operatorButton = document.querySelectorAll(".operator");

const equalto = document.querySelector(".equal-to");
const clearAll = document.querySelector(".all-clear");
const deleteLast = document.querySelectorAll(".delete");
const plusMinus = document.querySelectorAll(".plus-minus");

const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
let haveDot = false;

class Calculator {
  constructor(display1, display2) {
    this.display1 = display2;
    this.display2 = display1;
    this.clear();
  }
  clear() {
    this.disNum1 = "";
    this.disNum2 = "";
    this.lastOperation = "";
    this.display1.innerText = "";
    this.display2.innerText = '';
  }
}
const calculator = new Calculator(display1, display2);

numberButtons.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    if (e.target.innerText === "," && !haveDot) {
      operator = true;
    } else if (e.target.innerText === "," && haveDot) {
      return;
    }
    disNum2 += e.target.innerText;
    display2.innerText = disNum2;
  });
});

operatorButton.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.chooseoperator(operator.innerText);
    calculator.updateDisplay();
  });
});

chooseOperator(operator) {
    if (this.disNum1 === '') return;
    if (this.disNum2 !== '') {
      this.compute()
    }

    this.operator = operator
    this.disNum2 = this.disNum1
    this.disNum1 = ''
  }

compute() {
  let computation;
  const dis1 = parseFloat(this.disNum1);
  const dis2 = parseFloat(this.disNum2);
  if (isNaN(dis1) || isNaN(dis2)) return;
  switch (this.lastOperationr) {
    case "+":
      return dis1 + dis2;
    case "-":
      return dis1 - dis2;
    case "x":
      return dis1 * dis2;
    case "/":
      return dis1 / dis2;
    case "%":
      return dis1 % dis2;
  }
  this.disNum2 = computation;
  this.lastOperation = undefined;
  this.disNum1 = "";
}

updateDisplay() {
  if (this.lastOperation) {
    this.display1.innerText =
      this.disNum1.toString() +
      this.operator +
      this.disNum2.toString();
  } else {
    this.display2.innerText =
      this.disNum1.toString() + this.disNum2.toString();
  }
}
plusMinus.addEventListener("click",  () {
 
  
clearAll.addEventListener('click', clear => {
  calculator.clear()
  calculator.updateDisplay()
})

equalto.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

deleteLast.addEventListener("click", () => {
  display2.innerText = display2.innerText.toString().slice(0, -1);
  disNum2 = '';
});
