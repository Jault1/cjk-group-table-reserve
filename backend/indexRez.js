import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlpa$$word",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/rezs", (req, res) => {
  const q = "SELECT * FROM rezs";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/rezs", (req, res) => {
  const q = "INSERT INTO rezs(`title`, `desc`, `price`, `cover`) VALUES (?)";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/rezs/:id", (req, res) => {
  const rezId = req.params.id;
  const q = " DELETE FROM rezs WHERE id = ? ";

  db.query(q, [rezId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/rezs/:id", (req, res) => {
  const rezId = req.params.id;
  const q = "UPDATE rezs SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,rezId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(8800, () => {
  console.log("Connected to backend.");
});