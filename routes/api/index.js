const router = require("express").Router();
const goalRoutes = require("./goals");
const gcseRoutes = require("./gcse");

// Book routes
router.use("/goals", goalRoutes);

module.exports = router;
