const express = require("express");
const connectDB = require("./database/db");
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/blogs", require("./routes/blogs"));

app.listen(port, () => {
  console.log(`IX blogging app listening on port ${port}`);
});