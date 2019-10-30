const router  = require("express").Router();
const workoutController = require("../../controllers/workoutController");

// matches with /api/workout/pull
router.route("/pull")
.get(workoutController.findAll);

// matches with "/api/workout/:id"
router.route("/:id")
.get(workoutController.findById)
.put(workoutController.update)
.delete(workoutController.remove)
.post(workoutController.create);

module.exports = router;