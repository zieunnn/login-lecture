"use strict"

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  
  login: (req, res) => {
    res.render("home/login");
  },
}

const users = {
  id: ["kindz2", "kindz3", "kindz4"],
  pw: ["1234", "1234", "123456"]
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
          pw = req.body.pw;
    
    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.pw[idx] === pw){
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패했습니다."
    });
  }
}

module.exports = {
  output,
  process,
}