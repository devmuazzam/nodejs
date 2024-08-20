const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/Controller");
const PORT = 8000;
const mongoURI = "mongodb://127.0.0.1:27017/test";

const app = express();
mongoose
  .connect(mongoURI)
  .then(() => console.log("DB connected successfully!"))
  .catch((err) => console.log(`connection failed! ${err}`));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log(router);
app.use("/api", router);

app.listen(PORT, () => console.log("app listening on port 8000"));
