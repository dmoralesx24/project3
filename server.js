const express = require("express");

// const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
// passport config
require("./config/passport")(passport);

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// global variables
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');

//   next();
// })

// middleware for express sessions
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// middleware for flash
// app.use(flash());

// Define middleware here for express server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://dmorales:Galaxy24!@ds229068.mlab.com:29068/heroku_0lfmbhc4");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
