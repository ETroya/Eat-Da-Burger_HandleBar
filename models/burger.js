//Import ORM
const orm =require("../config/orm");

const burger = {
    all(cb) {
      orm.all('burgers', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
      orm.create('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
      orm.update('burger', objColVals, condition, (res) => cb(res));
    },
    delete(condition,cb){
        orm.delete("burgers",condition, (res) => cb (res));
    },
  };

module.exports = burger;