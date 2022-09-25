"use strict";

//URLs
const btcPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
const ethPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
const nearPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=near&vs_currencies=usd";
const nexoPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=nexo&vs_currencies=usd";
const cardanoPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd";
const fantomPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=fantom&vs_currencies=usd";
const ripplePriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd";
const chainlinkPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd";
const arweavePriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=arweave&vs_currencies=usd";
const filecoinPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=usd";
const polygonPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=polygon&vs_currencies=usd";
const polkadotPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd";
const solanaPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";
const galaPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=gala&vs_currencies=usd";
const immutablexPriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=immutable-x&vs_currencies=usd";
const aavePriceURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=aave&vs_currencies=usd";
//Tie to document ID
const bitcoinCurrentPrice = document.getElementById("bitcoin-current-price");
const ethereumCurrentPrice = document.getElementById("ethereum-current-price");
const NearCurrentPrice = document.getElementById("near-current-price");
const XRPCurrentPrice = document.getElementById("XRP-current-price");
const nexoCurrentPrice = document.getElementById("nexo-current-price");
const cardanoCurrentPrice = document.getElementById("cardano-current-price");
const fantomCurrentPrice = document.getElementById("ftm-current-price");
const chainlinkCurrentPrice = document.getElementById(
  "chainlink-current-price"
);
const arweaveCurrentPrice = document.getElementById("arweave-current-price");
const filecoinCurrentPrice = document.getElementById("filecoin-current-price");
const polkadotCurrentPrice = document.getElementById("polkadot-current-price");
const solanaCurrentPrice = document.getElementById("solana-current-price");
const galaCurrentPrice = document.getElementById("gala-current-price");
const immutablexCurrentPrice = document.getElementById(
  "immutable-x-current-price"
);

const bitcoinTrades = document.getElementById("bitcoin_trades");
const ethereumTrades = document.getElementById("ethereum_trades");
const nearTrades = document.getElementById("near_trades");
// const testTrades = document.getElementsByClassName("tabcontent")[0 - 2];
const polygonTrades = document.getElementById("polygon_trades");

const bitcoinTradesButton = document.getElementById("tablinks-bitcoin");
const ethereumTradesButton = document.getElementById("tablinks-ethereum");
const nearTradesButton = document.getElementById("tablinks-nearprotocol");
const polygonTradesButton = document.getElementById("tablinks-polygon");

const tabContent = document.querySelectorAll(".tabcontent");

const myarray = [1, 2, 3, 4, 5, 6];

const handleTabs = (displayCryptoTab) => {
  //I did this:
  // for (var i = 0; i < tabContent.length; i++) {
  //   tabContent[i].style.display = "none";
  // }

  tabContent.forEach((tab) => {
    console.log(tab);
    tab.style.display = "none";
  });

  displayCryptoTab.style.display = "block";
};
console.log(tabContent);
// function handleTabs(displayCryptoTab, hideCryptoTab) {
//   displayCryptoTab.style.display = "block";
//   hideCryptoTab.style.display = "none";
//   return true;
// }

ethereumTradesButton.addEventListener("click", () =>
  handleTabs(ethereumTrades)
);
bitcoinTradesButton.addEventListener("click", () => handleTabs(bitcoinTrades));
nearTradesButton.addEventListener("click", () => handleTabs(nearTrades));
polygonTradesButton.addEventListener("click", () => handleTabs(polygonTrades));
// fetch(url + qstring).then(function (response) {
//   return console.log(response.json().data);
// });

// .then(function (data) {
//   return console.log(data);
// });

const myHeaders = new Headers();
myHeaders.append("accept", "application/json");

const myInit = {
  Headers: myHeaders,
};

const fetchData = async () => {
  //BTC
  const btcResponse = await fetch(btcPriceURL, myInit);
  const btcData = await btcResponse.json();
  //ETH
  const ethResponse = await fetch(ethPriceURL, myInit);
  const ethData = await ethResponse.json();
  //Near
  const nearResponse = await fetch(nearPriceURL, myInit);
  const nearData = await nearResponse.json();
  //Fantom
  const ftmResponse = await fetch(fantomPriceURL, myInit);
  const ftmData = await ftmResponse.json();
  //Ripple
  const xrpResponse = await fetch(ripplePriceURL, myInit);
  const xrpdata = await xrpResponse.json();
  //Nexo
  const nexoResponse = await fetch(nexoPriceURL, myInit);
  const nexoData = await nexoResponse.json();
  //Cardano
  const cardanoResponse = await fetch(cardanoPriceURL, myInit);
  const cardanoData = await cardanoResponse.json();
  //Chainlink
  const chainlinkResponse = await fetch(chainlinkPriceURL, myInit);
  const chainlinkData = await chainlinkResponse.json();
  //Arweave
  const arweaveResponse = await fetch(arweavePriceURL, myInit);
  const arweaveData = await arweaveResponse.json();
  //Filecoin
  const filecoinResponse = await fetch(filecoinPriceURL, myInit);
  const filecoinData = await filecoinResponse.json();
  //Polkadot
  const polkadotResponse = await fetch(polkadotPriceURL, myInit);
  const polkadotData = await polkadotResponse.json();
  //Solana
  const solanaResponse = await fetch(solanaPriceURL, myInit);
  const solanaData = await solanaResponse.json();
  //Gala
  const galaResponse = await fetch(galaPriceURL, myInit);
  const galaData = await galaResponse.json();
  //ImmutableX
  const imxResponse = await fetch(immutablexPriceURL, myInit);
  const imxData = await imxResponse.json();

  let btcUSDPrice = "$" + btcData.bitcoin.usd;
  let ethUSDPrice = "$" + ethData.ethereum.usd;
  let nearUSDPrice = "$" + nearData.near.usd;
  let nexoUSDPrice = "$" + nexoData.nexo.usd;
  let ftmUSDPrice = "$" + ftmData.fantom.usd;
  let xrpUSDPrice = "$" + xrpdata.ripple.usd;
  let cardanoUSDPrice = "$" + cardanoData.cardano.usd;
  let chainlinkUSDPrice = "$" + chainlinkData.chainlink.usd;
  let arweaveUSDPrice = "$" + arweaveData.arweave.usd;
  let filecoinUSDPrice = "$" + filecoinData.filecoin.usd;
  let polkadotUSDPrice = "$" + polkadotData.polkadot.usd;
  let solanaUSDPrice = "$" + solanaData.solana.usd;
  let galaUSDPrice = "$" + galaData.gala.usd;
  let imxUSDPrice = "$" + imxData["immutable-x"].usd;

  bitcoinCurrentPrice.innerText = btcUSDPrice;
  ethereumCurrentPrice.innerText = ethUSDPrice;
  NearCurrentPrice.innerText = nearUSDPrice;
  fantomCurrentPrice.innerText = ftmUSDPrice;
  nexoCurrentPrice.innerText = nexoUSDPrice;
  XRPCurrentPrice.innerText = xrpUSDPrice;
  cardanoCurrentPrice.innerText = cardanoUSDPrice;
  chainlinkCurrentPrice.innerText = chainlinkUSDPrice;
  arweaveCurrentPrice.innerText = arweaveUSDPrice;
  filecoinCurrentPrice.innerText = filecoinUSDPrice;
  polkadotCurrentPrice.innerText = polkadotUSDPrice;
  solanaCurrentPrice.innerText = solanaUSDPrice;
  galaCurrentPrice.innerText = galaUSDPrice;
  immutablexCurrentPrice.innerText = imxUSDPrice;
};
fetchData();

//Tabs Section

// function myFunction() {
//   var i, tabcontent, tablinks;

//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace("active", "");
//   }
