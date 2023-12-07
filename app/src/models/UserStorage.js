"use strict"

class UserStorage {
  static #users = {
    id: ["kindz2", "kindz3", "kindz4"],
    pw: ["1234", "1234", "123456"],
    name: ["a", "b", "c"]
  };

  static getUsers(...fields){
    const users = this.#users;
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
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;