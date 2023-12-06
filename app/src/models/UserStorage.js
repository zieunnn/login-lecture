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
}

module.exports = UserStorage;