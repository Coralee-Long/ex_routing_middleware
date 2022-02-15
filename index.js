const express = require("express");
const app = express();
const secureRouter = require("./routes/secureRouter");
const PORT = process.env.PORT || 3005;
const pool = require("./conf");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
require("dotenv").config();

app.use("/", secureRouter);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
