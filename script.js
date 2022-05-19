class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement){
   this.previousOperandTextElement = currentOperandTextElement 
   this.currentOperandTextElement = previousOperandTextElement
   this.clear()
  }

  clear() {
    this.currentOperhand = ''
    this.previousOperhand = ''
    this.operation = undefined
  }

  delete() {

  }
 
  appendNumber(number) {
   this.currentOperhand = number
  }
  
  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperhand
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operhand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operhand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})