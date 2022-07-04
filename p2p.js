'use strict';

const btnAdvert = document.querySelectorAll('.btn-advert');
const buySellBtnDiv = document.querySelector('.how-p2p-works-btns');
const howP2pWorksDivs = document.querySelectorAll('.how-p2p-works-body');
const buyDiv = document.querySelector('.buy-div');
const sellDiv = document.querySelector('.sell-div');
const p2pCryptoTab = document.querySelector('.p2p-currency-tab');
const advertTabs = document.querySelectorAll('.advert-tab');
const ethTab = document.querySelector('.eth-tab');
const btcTab = document.querySelector('.btc-tab');
const bnbTab = document.querySelector('.bnb-tab');

const p2pAdvertHeader = document.querySelector('.p2p-advert-header');
const p2pAdvertBody = document.querySelectorAll('.p2p-advert-body');
const paymentEl = document.querySelectorAll('.payment-el');
const tradeEl = document.querySelector('.trade-el');
const footer = document.querySelector('.footer-content');
const footers = document.querySelectorAll('.footers');

// other-btn
const otherBtn = document.querySelectorAll('other-btns');

// Make All The Button Link To Login
document.body.addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target;
  if (!target.classList.contains('btn-advert')) return;
  location.href = 'login.html';
});

// Implement BUY / SELL TAB
buySellBtnDiv.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('sell-crypto-btn')) {
    howP2pWorksDivs.forEach(div => {
      div.classList.remove('hidden');
      buyDiv.classList.add('hidden');
    });
  }
  if (target.classList.contains('buy-crypto-btn')) {
    howP2pWorksDivs.forEach(div => {
      div.classList.remove('hidden');
      sellDiv.classList.add('hidden');
    });
  }
});

// Coin Type TAB

// Function To add / remove hidden class
function hiddenClass(tabType, sellType) {
  advertTabs.forEach(tab => {
    tab.classList.add('hidden');
    tabType.classList.remove('hidden');
    btnAdvert.forEach(btn => {
      btn.innerText = sellType;
    });
  });
}

p2pCryptoTab.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('eth-btn')) hiddenClass(ethTab, 'Sell ETH');
  if (target.classList.contains('btc-btn')) hiddenClass(btcTab, 'Sell BTC');
  if (target.classList.contains('bnb-btn')) hiddenClass(bnbTab, 'Sell BNB');
});

function responsive(x) {
  if (x.matches) {
    paymentEl.forEach(el => {
      el.classList.add('hidden');
    });
    p2pAdvertHeader.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    p2pAdvertBody.forEach(body => {
      body.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    });
    footer.style.display = 'inline';
    footer.style.textAlign = 'center';
    footers.forEach(footer => {
      footer.style.padding = '15px';
    });
  } else {
    paymentEl.forEach(el => {
      el.classList.remove('hidden');
    });
    p2pAdvertHeader.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
    p2pAdvertBody.forEach(body => {
      body.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr';
    });
    tradeEl.classList.remove('hidden');
    footer.style.display = 'grid';
    // footer.style.textAlign = 'center';
  }
}

var size = window.matchMedia('(max-width: 914px)');
responsive(size);
size.addEventListener('change', responsive);

function smResponsive(x) {
  if (x.matches) {
    paymentEl.forEach(el => {
      el.classList.add('hidden');
    });
    tradeEl.classList.add('hidden');
    p2pAdvertHeader.style.gridTemplateColumns = '1fr 1fr 1fr';
    p2pAdvertBody.forEach(body => {
      body.style.gridTemplateColumns = '1fr 1fr 1fr';
      body.style.rowGap = '15px';
    });
  } else {
    // p2pAdvertHeader.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    // p2pAdvertBody.forEach(body => {
    //   body.style.gridTemplateColumns = '1fr 1fr 1fr ';
    // });
  }
}

var size2 = window.matchMedia('(max-width: 600px)');
smResponsive(size2);
size2.addEventListener('change', smResponsive);

// other-btns

document.body.addEventListener('click', function (e) {
  const target = e.target;
  if (!target.classList.contains('other-btns')) return;
  location.href = 'login.html';
});

otherBtn.forEach(btn => {
  btn.style.cursor = 'pointer';
});
