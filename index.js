const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000, () => {
  console.log("Server is listening at \nhttp://localhost:3000");
});
