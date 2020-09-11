var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            console.log("burger all", res);
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;