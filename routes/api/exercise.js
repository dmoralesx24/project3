const router = require("express").Router();
const exerciseController = require("../../controllers/exerciseController");
const workoutController = require("../../controllers/workoutController");
// const axios = require("axios");
// const cheerio = require("cheerio");
// const db = require("../../models");

// this is for filling the database with
// router.get("/scrape", function (req, res) {
//   axios.get("https://www.bodybuilding.com/exercises/finder/?muscleid=18").then(function(response) {
//     const $ = cheerio.load(response.data);

//     $(".ExResult-row").each(function(i, element) {
//       const results = {};

//       results.title = $(this).find("h3").children("a").text().trim();
//       results.link = $(this).find("h3").children("a").attr("href");
//       results.muscle = $(this).find(".ExResult-muscleTargeted").children("a").text().trim();
//       results.equipment = $(this).find(".ExResult-equipmentType").children("a").text().trim();

//       db.Exercise.create(results).then(function(dbModel) {
//         console.log(dbModel);
//       }).catch(function(err) {
//         console.log(err);
//       });
//     });
//     res.send("Scraped Articles");
//   });
// });


// Matches with "/api/exercise/pull"
router.route("/pull")
  .get(exerciseController.findAll)
  .post(exerciseController.create);

// Matches with "/api/exercise/:id"
router
  .route("/:id")
  .get(exerciseController.findById)
  .put(exerciseController.update)
  .delete(exerciseController.remove)
// Matches with muscle type selected
router.route("/chest")
.get(exerciseController.findByMuscle);


module.exports = router;
