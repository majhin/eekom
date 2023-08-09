require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/mongoose");
const port = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/index_routes"));

app.listen(port, () => {
	console.log(`eekom app listening on port ${port}`);
});
