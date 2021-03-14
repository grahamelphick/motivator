const router = require("express").Router();
const goalRoutes = require("./goals");
const journalRoutes = require("./journals");
const mantraRoutes = require("./mantra");

router.use("/goals", goalRoutes);
router.use("/journals", journalRoutes);
router.use("/mantra", mantraRoutes);

module.exports = router;
