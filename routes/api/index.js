const router = require("express").Router();
const exerciseRoutes = require("./exercise");
const usersRoutes = require("./users");
const loginRoute = require("./login");
const workoutRoute = require("./workout");
const noteRoute = require("./note");

// database routes
router.use("/exercise", exerciseRoutes);
router.use("/users", usersRoutes);
router.use("/login", loginRoute);
router.use("/workout", workoutRoute);
router.use("/note", noteRoute);

module.exports = router;
