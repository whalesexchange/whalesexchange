'use strict';

const importType = document.querySelector('.Import-type');
const importTypeName = document.querySelectorAll('.type-name');
const inputForm = document.querySelector('.input-form');
const inputText = document.querySelector('.input-text');
const importBtn = document.querySelector('.import-btn');
const navLogo = document.querySelector('.nav-logo');

importType.addEventListener('click', function (e) {
  if (!e.target.classList.contains('type-name')) return;
  importTypeName.forEach(impType => {
    impType.classList.remove('active-import-type');
    impType.classList.add('active-import-type');
  });
});

importBtn.addEventListener('click', function (e) {
  inputForm.addEventListener('submit', function () {
    sendEmail();
    reset();
    return false;
  });
});

navLogo.addEventListener('click', function (e) {
  e.preventDefault();
  location.href = './whales.html';
});
