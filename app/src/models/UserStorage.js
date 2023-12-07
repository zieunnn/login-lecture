"use strict"

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id){
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    console.log(userInfo);
    return userInfo;
  }
  
  static getUsers(...fields){
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      // console.log(newUsers, field);
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    // console.log(newUsers);
    return newUsers;
  }

  static getUserInfo(id) {
    // console.log(fs.readFile("./src/db/users.json"));
    return fs
    .readFile("./src/db/users.json")
    .then((data) => {
      return this.#getUserInfo(data, id);
    })
    .catch(console.error);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    return { success: true };
  }
}

module.exports = UserStorage;