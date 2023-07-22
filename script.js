const currencyFirst = document.getElementById("currencyFirst");
const currencySecond = document.getElementById("currencySecond");
const exchangeRate = document.getElementById("exchangeRate");
const count = document.getElementById("count");
const result = document.getElementById("result");

const apikey = "22966ab8376ee2627985a02f";

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
count.addEventListener("input", updateRate);

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/${apikey}/latest/${currencyFirst.value}`)
    .then((res) => res.json())
    .then((data) => {
        let exchange = ((data.conversion_rates[currencySecond.value]) * count.value).toFixed(2);
        result.textContent = `${exchange}`;
        
        let current = data.conversion_rates[currencySecond.value];
        exchangeRate.textContent = `1 ${currencyFirst.value} = ${current.toFixed(2)} ${currencySecond.value}`    
    }
     );
}
updateRate();