var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "",
  database: 'mydb'
})

//connection.connect()

// connection.query('SELECT * from customers as solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ',solution)
//})
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
