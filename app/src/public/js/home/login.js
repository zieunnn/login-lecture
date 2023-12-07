"use strict"

const id = document.querySelector('input[name="id"]'),
      pw = document.querySelector('input[name="pw"]'),
      loginBtn = document.querySelector('#loginBtn');

const login = () => {
  const req = {
    id: id.value,
    pw: pw.value
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success){
      location.href = "/";
    }else{
      alert(res.msg);
    }
  })
  .catch((err) => {
    // console.error(new Error("로그인 중 에러 발생!"));
    console.error("로그인 중 에러 발생!");
  });
}

loginBtn.addEventListener("click", login);
