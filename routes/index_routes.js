const express = require("express");
const router = express.Router();

router.use("/products", require("./productRoutes"));

module.exports = router;
