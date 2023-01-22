let formElement = document.querySelector(".form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let button = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    if (amount === "") {
        return;
    }

    let result = amount * currency;
    resultElement.innerText = result.toFixed(2);
});