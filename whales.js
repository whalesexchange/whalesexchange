'use strict';

// Selectors

const navP2p = document.querySelector('.nav-p2p');
const navAssets = document.querySelector('.nav-assets');
const navNft = document.querySelector('.nav-nft');
const navLogo = document.querySelector('.nav-logo-btn');
const allNavLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');
const getStartedBtn = document.querySelectorAll('.get-started-btn');
const moreCryptoBtn = document.querySelector('.more-crypto-btn');

const headerDiv = document.querySelector('.header-div');
const headerContent = document.querySelector('.header-content');
const priceChange = document.querySelectorAll('.price-change');
const supportedWalletDiv = document.querySelector('.supported-wallet-div');
const footer = document.querySelector('.footer-content');
const threeStepsDetails = document.querySelector('.three-steps-details');

// sections
const topCryptoSection = document.querySelector('.top-currency');

// Implementing Nav Hover Style
function navStyle(e, opacity) {
  const navLink = e.target;
  if (!navLink.classList.contains('nav-link')) return;
  navLink.style.opacity = opacity;
}
nav.addEventListener('mouseover', function (e) {
  navStyle(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  navStyle(e, 1);
});

// Smooth Scroll Section
navAssets.addEventListener('click', function () {
  topCryptoSection.scrollIntoView({ behavior: 'smooth' });
});

// More Crypto Button Style

// default hover style function
function btnHover(dark, white) {
  moreCryptoBtn.style.backgroundColor = dark;
  moreCryptoBtn.style.color = white;
}
moreCryptoBtn.addEventListener('mouseover', function () {
  btnHover('#007bff', '#fff');
});

moreCryptoBtn.addEventListener('mouseout', function () {
  btnHover('#fff', '#161c2d');
});

// Get Started Button //Redirects to Login Page
document.body.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-nft')) {
    location.href = 'login.html';
  }

  if (!e.target.classList.contains('get-started-btn')) return;
  location.href = 'login.html';
});

navP2p.addEventListener('click', function () {
  location.href = 'p2p.html';
});

navLogo.addEventListener('click', function (e) {
  e.preventDefault();
  location.href = 'whales.html';
});

// WhalesXchange Home Page Responsive
function responsive(x) {
  if (x.matches) {
    headerDiv.style.display = 'inline';
    headerContent.style.paddingBottom = '45px';
    headerDiv.style.width = 'auto';
    priceChange.forEach(price => {
      price.classList.add('hidden');
    });
    supportedWalletDiv.style.display = 'inline';
    supportedWalletDiv.style.textAlign = 'center';

    footer.style.display = 'inline';
    footer.style.textAlign = 'center';

    threeStepsDetails.style.display = 'inline';
  } else {
    // Header
    headerDiv.style.display = 'grid';
    // Footer
    footer.style.display = 'grid';
    footer.style.textAlign = 'center';

    // Top Currency
    priceChange.forEach(price => {
      price.classList.remove('hidden');
    });

    // Supported Wallet
    supportedWalletDiv.style.display = 'grid';
    supportedWalletDiv.style.textAlign = 'left';

    // Get Started IN Three Steps Section
    threeStepsDetails.style.display = 'grid';
  }
}

var size = window.matchMedia('(max-width: 914px)');
responsive(size);
size.addEventListener('change', responsive);
