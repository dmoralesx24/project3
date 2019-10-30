const router = require("express").Router();
const { ensureAuthenticated } = require("../../config/auth");

router.get("/", (req, res) => res.send());
router.get("/dashboard", ensureAuthenticated, (req, res) => 
    res.send("dashboard", {
        name: req.user.name
    }));


module.exports = router;