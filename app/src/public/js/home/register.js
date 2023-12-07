"use strict"

console.log('asdf');

const id = document.querySelector('input[name="id"]'),
      pw = document.querySelector('input[name="pw"]'),
      pwConfirm = document.querySelector('input[name="pw-confirm"]'),
      name = document.querySelector('input[name="name"]'),
      registerBtn = document.querySelector('#registerBtn');

const register = () => {
  if(!id.value) return alert("아이디를 입력하세요.");
  if(pw.value !== pwConfirm.value) return alert("비밀번호가 일치하지 않습니다.");

  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if(res.success){
      location.href = "/login";
    }else{
      alert(res.msg);
    }
  })
  .catch((err) => {
    // console.error(new Error("로그인 중 에러 발생!"));
    console.error("회원가입 중 에러 발생!");
  });
}

registerBtn.addEventListener("click", register);
