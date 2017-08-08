var mysql = require("mysql");
//mysql://sy851ofcvs35hfxu:un1er40cvqkjq7un@h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p2ttuss7mb7t7nx5
var connection = mysql.createConnection({
  host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306",
  user: "sy851ofcvs35hfxu",
  password: "un1er40cvqkjq7un",
  database: "p2ttuss7mb7t7nx5"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});
module.exports = connection;