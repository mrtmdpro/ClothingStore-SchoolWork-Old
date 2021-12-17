const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../db/orders.db');

db.run('CREATE TABLE orders (id INTEGER PRIMARY KEY AUTOINCREMENT, fname VARCHAR(20), lname VARCHAR(20), pname VARCHAR(20), tel VARCHAR(12), email VARCHAR(50), country VARCHAR(20), typeofshipping INTEGER, dateofreceive DATE, comment TEXT )');

db.close();

