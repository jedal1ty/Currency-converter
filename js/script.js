{
    const calculateResult = (currency, amount) => {
        const rateEUR = 4.4564;
        const rateUSD = 4.3315;
        const rateCHF = 4.7103;
        const rateGBP = 5.3731;
        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const buttonElement = document.querySelector(".js-button");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const button = buttonElement.value;

        let result = calculateResult(currency, amount, button);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}