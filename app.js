const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

const dropdown = document.querySelectorAll(".dropdown select");

for (code in countryList){
    console.log(code, countryList[code]);
}