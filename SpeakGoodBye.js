
const inputElement = document.getElementById("input-EL");
const buttonElement = document.getElementById("press")
const resultOutPut = document.getElementById("result");

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

buttonElement.addEventListener("click", () => {
    const inputValue = inputElement.value;
    if (inputValue === names[1] || inputValue === names[2] || inputValue === names[3] || inputValue === names[9]) {
        resultOutPut.innerHTML = `Goodbye ${inputValue}`;
    } else {
        resultOutPut.innerHTML = `Hello ${inputValue}`;
    }
});
