const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const resultElement = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const delBtn = document.getElementById('del')
const ymnBtn = document.getElementById('ymn')
let action = "+"
plusBtn.onclick = function () {
    action = "+"
}
minusBtn.onclick = function () {
    action = "-"
}
delBtn.onclick = function () {
    action = "/"
}
ymnBtn.onclick = function () {
    action = "*"
}
submitBtn.onclick = function() {
    if (action == "+") {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    } 
    if (action == "-") {
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
    } 
    if (action == "/") {
        const sum = Number(input1.value) / Number(input2.value)
        resultElement.textContent = sum
    } 
    if (action == "*") {
        const sum = Number(input1.value) * Number(input2.value)
        resultElement.textContent = sum
    }
}