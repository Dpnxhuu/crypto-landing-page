const menuBtn = document.getElementsByClassName("menu-btn")[0];
const navMobile = document.getElementsByClassName("nav-mobile")[0];
const Bitcoin = document.querySelector(".Bitcoin .value");
const Ethereum = document.querySelector(".Ethereum .value");
const Dogecoin = document.querySelector(".Dogecoin .value");


window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


menuBtn.addEventListener("click", () => {
  navMobile.classList.toggle("active");
});

async function apiCall() {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd`,
  );
  const data = await res.json();

  Bitcoin.textContent = `$${data.bitcoin.usd}`;
  Ethereum.textContent = `$${data.ethereum.usd}`;
  Dogecoin.textContent = `$${data.dogecoin.usd}`;
}

apiCall();
