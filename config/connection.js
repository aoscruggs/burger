var mysql = require("mysql");
//mysql://sy851ofcvs35hfxu:un1er40cvqkjq7un@h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p2ttuss7mb7t7nx5
var connection;

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: "",
		database: burgers_db
	});
};



connection.connect(); 
module.exports = connection;