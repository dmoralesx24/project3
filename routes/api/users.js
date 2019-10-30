const router = require("express").Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// user model
const User = require("../../models/user");

// /api/login
router.get("/login", (req, res) => res.send());

// api/register
router.get("/register", (req, res) => res.send());

// api/register
router.post("/register", (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    // checking required fields
    if(!name || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" });
    }

    // check if password match
    if(password !== password2) {
        errors.push({ msg: "Password do not match" });
    }

    // check password length
    if(password.length < 6) {
        errors.push({ msg: "Password should at least be 6 characters" });
    }

    if(errors.length > 0 ) {
        res.send("register", {
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        // validation
        User.findOne({ email: email })
        .then(user => {
            if(user) {
                // user exists
                errors.push({ msg: "Email is already registered" })
                res.send("register", {
                    errors,
                    name,
                    email,
                    password,
                    password2
                });
            } else {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: password
                });
                console.log(newUser);
                // crypt the password
                bcrypt.genSalt(10, (err, salt) => 
                 bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;

                    // set password to has
                    newUser.password = hash;

                    // save new user
                    newUser.save()
                    .then(user => {
                        // req.flash("success_msg", "You are now registered and can log in");
                        res.redirect("/login")
                    })
                    .catch(err => console.log(err));
                }))
            }
        })
    }
});

// Login Handle
// router.post("/login", (req, res, next) => {
//     // console.log("1",req);
//     passport.authenticate("local", {
//         successRedirect: "/dashboard",
//         failureRedirect: "/login",
//         failureFlash: true
//     })(req, res, next).then(res => console.log(2, res))
// });

router.post("/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
})

// Logout Handle
router.get("/logout", (req, res) => {
    req.logOut();
    // req.flash("success_msg", "You are logged out");
    res.redirect("/login");
})

module.exports = router;