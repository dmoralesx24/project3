const router = require("express").Router();
const noteController = require("../../controllers/noteController");


// this url will create a new note from input
// matches with /api/note/new
// router.route("/new")
// .post(noteController.create);
// matches with /api/note/:id
router.route("/:id")
.delete(noteController.remove)
.put(noteController.update)
.post(noteController.create)
.get(noteController.findById);

module.exports = router;