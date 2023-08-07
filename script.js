const moneyForm = document.getElementById('money-form');
const resultDiv = document.getElementById('result');

moneyForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const days = parseInt(document.getElementById('days').value);

    if (!isNaN(amount) && !isNaN(days) && days > 0) {
        const average = amount / days;
        resultDiv.innerHTML = `Average amount available for each day: $${average.toFixed(2)}`;
    } else {
        resultDiv.innerHTML = 'Please enter valid values.';
    }
});
