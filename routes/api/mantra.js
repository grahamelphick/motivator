const router = require("express").Router();
const mantraController = require("../../controllers/mantraController");

router.route("/")
    .get(mantraController.find)
    .post(mantraController.create)
    // .put(mantraController.update);

// router
//     .route("/:id")
    // .get(mantraController.findById)
    // .put(mantraController.update)
    // .delete(mantraController.remove);

module.exports = router;
