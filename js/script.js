{
    const calculateResult = (currency, amount) => {
        const rateEUR = 4.4564;
        const rateUSD = 4.3315;
        const rateCHF = 4.7103;
        const rateGBP = 5.3731;
        switch (currency) {
            case "EUR":
                rate = rateEUR
                return amount / rateEUR;

            case "USD":
                rate = rateUSD
                return amount / rateUSD;

            case "CHF":
                rate = rateCHF
                return amount / rateCHF;

            case "GBP":
                rate = rateGBP
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
        const button = document.querySelector(".js-button");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(currency, amount)

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}