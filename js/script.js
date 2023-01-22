let formElement = document.querySelector(".form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let button = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6965;
let rateUSD = 4.4828;
let rateCHF = 4.7608;
let rateGBP = 5.4389;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let rate;

    switch (currency) {
        case "EUR":
            rate = rateEUR;
            break;
        
        case "USD":
            rate = rateUSD;
            break;
        
        case "CHF":
            rate = rateCHF;
            break;
        
            case "GBP":
            rate = rateGBP;
            break;
    }

    const result = amount / rate;

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});