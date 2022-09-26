"use strict";

const tableRow = document.querySelector(".table-row");
const tradesTab = document.querySelector(".trades-tab");
const tabHeading = document.querySelector(".tabcontent-heading");
const tabBody = document.querySelector(".tab-table-body");
const tabTable = document.querySelector(".tab-table");

tabTable.style.display = "none";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const generateCryptoUrl = (coin) =>
  `https://api.coingecko.com/api/v3/coins/${coin}`;

const cryptos = [
  "bitcoin",
  "ethereum",
  "near",
  "nexo",
  "cardano",
  "fantom",
  "chainlink",
  "ripple",
  "arweave",
  "filecoin",
  "polkadot",
  "solana",
  "gala",
  "immutable",
  "aave",
];

const cryptoLinks = cryptos.map((crypto) => generateCryptoUrl(crypto));

const getCrypto = Promise.all(
  cryptoLinks.map(async (cryptoLink) => {
    const response = await fetch(cryptoLink);
    return response.json();
  })
).then((cryptoData) => {
  cryptoData.forEach((crypto) => {
    tableRow.innerHTML += `<tr>
        <td>${crypto.name}</td>
        <td>${crypto.symbol}</td>
        <td>${formatter.format(crypto.market_data.current_price.usd)}</td>
        <td>500</td>
        <td>1234</td>
        <td>-10000</td>
      </tr>`;
  });
});

cryptos.forEach(
  (crypto) =>
    (tradesTab.innerHTML += `<button class='tabs-links'>${crypto}</button>`)
);

const tabLinks = document.querySelectorAll(".tabs-links");

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", async () => {
    const crypto = generateCryptoUrl(tabLink.innerText.toLowerCase());
    const response = await fetch(crypto);
    const data = await response.json();
    tabTable.style.display = "block";
    tabHeading.innerText = `${data.name}`;
    tabBody.innerHTML = ` <td>${formatter.format(
      data.market_data.current_price.usd
    )}</td>
    <td>CoinBase</td>
    <td>21440.67</td>
    <td>0.00134482</td>
    <td>0</td>`;
  });
});
