  const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('./db/orders.db');

  // insert one row into the langs table
  db.run(`INSERT INTO orders(id, fname,lname,tel,email,country,typeofshipping) VALUES(?,?,?,?,?,?,?)`, [1,'John','Pat','89647972966','TaMD@mpei.ru','VietNam',3], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  // close the database connection
  db.close();