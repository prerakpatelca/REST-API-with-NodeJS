/* "StAuth10065: I Prerak Patel, 000825410 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */
var sqlite3 = require("sqlite3").verbose();
var express = require("express");
var app = express();
app.use(express.json());

// SQLite database stored in a file named api.db.
var file = "api.db";
var db = new sqlite3.Database(file);

db.serialize(function () {
  // Creating the SQLite database
  db.run(
    "CREATE TABLE IF NOT EXISTS users ( msgid INTEGER PRIMARY KEY, status TEXT, message TEXT,timestamp TEXT);"
  );

  // If the database file and/or table already exists, they should be wiped out (e.g.delete all previous entries in the table)
  db.run("DELETE FROM users");
});

/* GET request to http://localhost:3000/api/ */
app.get("/api/", (req, res) => {
  db.all("SELECT * FROM users", (err, row) => {
    if (err) {
      res.send(err.message);
    }

    // return a JSON array of the entire collection (which could be empty)
    res.send(row);
  });
});

/* PUT request to http://localhost:3000/api/ */
app.put("/api", (req, res) => {
  // current collection should be replaced with the new collection
  db.run("DELETE FROM users");

  // JSON array in the request body representing a new collection of items.
  req.body.forEach((element) => {
    db.all(
      `INSERT INTO users ( status, message, timestamp) VALUES("${element.status}", "${element.message}","${element.timestamp}");`,
      (err, row) => {
        if (err) {
          return res.send(err.message);
        }
      }
    );
  });

  // The PUT request should return "REPLACE COLLECTION SUCCESSFUL" in the body
  return res.send("REPLACE COLLECTION SUCCESSFUL");
});

/* POST request to http://localhost:3000/api/ */
app.post("/api", (req, res) => {
  // JSON object in the request body representing a new item. New item should be added to the current collection.
  db.all(
    `INSERT INTO users ( status, message, timestamp) VALUES("${req.body.status}", "${req.body.message}","${req.body.timestamp}");`,
    (err, row) => {
      if (err) {
        return res.send(err.message);
      }

      // POST request should return "CREATE ENTRY SUCCESSFUL" in the body.
      return res.send("CREATE ENTRY SUCCESSFUL");
    }
  );
});

/* DELETE request to http://localhost:3000/api/ */
app.delete("/api", (req, res) => {
  // delete the entire collection
  db.all("DELETE FROM users", (err, row) => {
    if (err) {
      return res.send(err.message);
    }

    // The DELETE request should return "DELETE COLLECTION SUCCESSFUL"
    return res.send("DELETE COLLECTION SUCCESSFUL");
  });
});

/* GET request to http://localhost:3000/api/id */
app.get("/api/:id", (req, res) => {
  // return a JSON object of the entry in the collection with the supplied id.
  db.all("SELECT * FROM users WHERE msgid = " + req.params.id, (err, row) => {
    if (err) {
      res.send(err.message);
    }
    // return a JSON Object
    res.send(row);
  });
});

/* PUT request to http://localhost:3000/api/id */
app.put("/api/:id", (req, res) => {
  var updateSql = "";
  if (req.body.status) {
    if (updateSql.trim() != "") {
      updateSql += ",";
    }
    updateSql += `status = "${req.body.status}"`;
  }
  if (req.body.message) {
    if (updateSql.trim() != "") {
      updateSql += ",";
    }
    updateSql += `message = "${req.body.message}"`;
  }
  if (req.body.timestamp) {
    if (updateSql.trim() != "") {
      updateSql += ",";
    }
    updateSql += `timestamp = "${req.body.timestamp}"`;
  }

  // contain a JSON object in the request body representing updated values for the item with the supplied id.
  db.all(
    // updated in the current collection to reflect these new values for supplied id.
    `UPDATE users SET ` + updateSql + ` WHERE msgid = "${req.params.id}";`,
    (err, row) => {
      if (err) {
        return res.send(err.message);
      }

      // The PUT request should return "UPDATE ITEM SUCCESSFUL".
      return res.send("UPDATE ITEM SUCCESSFUL");
    }
  );
});

/* DELETE request to http://localhost:3000/api/id */
app.delete("/api/:id", (req, res) => {
  // should delete the item from the collection with the supplied id.
  db.all("DELETE FROM users WHERE msgid = " + req.params.id, (err, row) => {
    if (err) {
      return res.send(err.message);
    }

    // The DELETE request should return "DELETE ITEM SUCCESSFUL".
    return res.send("DELETE ITEM SUCCESSFUL");
  });
});

// REST API should be accessible at http://localhost:3000/api/
var server = app.listen(3000, function () {
  console.log("RESTful API listening on port 3000!");
});
