require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS || "root",
  database: DB_NAME || "data",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP TABLE if exists movies; CREATE TABLE movies(id INT NOT NULL AUTO_INCREMENT, tmdb_id INT NOT NULL, poster_path VARCHAR(200) NOT NULL, original_title VARCHAR(200) NOT NULL, PRIMARY KEY (id));";
  con.query(sql, function (err) {
    if (err) throw err;
    console.log("Table creation was successful!");
    console.log("Closing...");
  });
  con.end();
});


