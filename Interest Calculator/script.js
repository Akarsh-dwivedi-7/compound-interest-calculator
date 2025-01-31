function calculate() {
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");
    const currencyInput = document.getElementById("currency");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value) / 100;
    let years = Number(yearsInput.value);
    let currency = currencyInput.value; // Selected Currency

    // Validation
    if (principal <= 0 || isNaN(principal)) {
        alert("Please enter a valid principal amount.");
        return;
    }
    if (rate <= 0 || isNaN(rate)) {
        alert("Please enter a valid interest rate.");
        return;
    }
    if (years <= 0 || isNaN(years)) {
        alert("Please enter a valid number of years.");
        return;
    }

    // Compound Interest Formula
    const n = 1; // Annually compounded
    const result = principal * Math.pow((1 + rate / n), n * years);

    // Display result in selected currency
    totalAmount.textContent = result.toLocaleString("en-IN", { 
        style: "currency", 
        currency: currency 
    });
}
