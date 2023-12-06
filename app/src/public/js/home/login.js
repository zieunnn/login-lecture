"use strict"

const id = document.querySelector('input[name="id"]'),
      pw = document.querySelector('input[name="pw"]'),
      loginBtn = document.querySelector('#loginBtn');

const login = () => {
  const req = {
    id: id.value,
    pw: pw.value
  };
}

loginBtn.addEventListener("click", login);
