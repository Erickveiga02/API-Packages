// db connect
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'mysql_db',
  user     : 'user_packages',
  password : 'passwords',
  database : 'packages'
});
 
module.exports = connection;