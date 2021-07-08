const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rate and update the DOM
function calculate() {
   const currency_one = currencyEl_one.value;
   const currency_two = currencyEl_two.value;

   console.log(currency_one);
   console.log(currency_two);

    fetch(` https://v6.exchangerate-api.com/v6/8a3075ddacd6225503ab13a2/latest/${currency_one}`)
    .then(response => response.json())
    .then(data => {

        const rate = data.conversion_rates[currency_two]

        console.log(data.conversion_rates)

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`

        amountEl_two.value = (amountEl_one.value * rate).toFixed(5)

      
    });
    


}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();