const orm = require('../config/orm.js');

var burger = {
	getAllBurgers: function (cb) {
		orm.all("burgers", cb);
	} 
	getAllBurgers: function (cb) {
		orm.create("burgers", cb);
	} 

}
module.exports = burger;