const router = require("express").Router();
const goalRoutes = require("./goals");
const journalRoutes = require("./journals");

router.use("/goals", goalRoutes);
router.use("/journals", journalRoutes);

module.exports = router;
