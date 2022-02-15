const secureRouter = require("express").Router();
const pool = require("../conf");

const secure = (req, res, next) => {
  if (req.query.token && req.query.token.length > 3) {
    res.send("Success!");
    next();
  }
};

const error = (req, res, next) => {
  res.sendStatus(403);
};

// secureRouter.use([secure, error]);

secureRouter.get("/users", (req, res) => {
  pool
    .query(`SELECT * FROM users`)
    .then((data) => res.json(data.rows))
    .catch((e) => res.status(500).send(e));
});

secureRouter.get("/token", (req, res) => {
  pool
    .query(`SELECT * FROM token`)
    .then((data) => res.json(data.rows))
    .catch((e) => res.status(500).send(e));
});

// Toke Table has "id" column with fruit names, and shares "user_id" with Users Table.
secureRouter.get("/verify/:token", (req, res) => {
  const { token } = req.params;
  pool
    .query("SELECT * FROM token WHERE id = $1", [token])
    .then((data) => res.json(data.rows))
    .catch((e) => res.sendStatus(404));
});

module.exports = secureRouter;
