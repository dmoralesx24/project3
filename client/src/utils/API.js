import axios from "axios";

export default {
  // Gets all Exercises
  getExercises: function() {
    return axios.get("/api/exercise/pull");
  },
  // Gets the exercise with the given muscle group
  getExercise: function(muscle) {
    return axios.get("/api/books/" + muscle);
  },
  // Saves a exercise to the workout database
  saveExercise: function(id, title, link, muscle, equipment) {
    return axios({
      method: "POST",
      url: "/api/workout/" + id,
      data: {
        title: title,
        link: link,
        muscle: muscle,
        equipment: equipment
      }
    });
  },
  // this function is for pulling everything from the 
  // WORKOUT database
  getWorkouts: function() {
    return axios.get("/api/workout/pull");
  },
  // Deletes a workout with the given id
  deleteWorkout: function(id) {
    return axios.delete("/api/workout/" + id);
  },
  // create a note for a that specific exercise in workout DB
  createNote: function (id, sets, reps, body) {
    return axios({
      method: "POST",
      url: "/api/note/" + id,
      data: {
        sets: sets,
        reps: reps,
        body: body
      }
    });
  },
  // grab all notes
  grabNote: function(id) {
    return axios.get("/api/workout/" + id);
  },
  // for the Register page this creates a user 
  createUser: function (userData) {
    return axios.post("/api/users/register", userData);
  },
  // this route function is for logging user in
  SignIn: function(email, password) {
    return axios.post("/api/users/login", {
      email,
      password
    });
  },
  // this route is for logging the user out 
  SignOut: function() {
    return axios.get("/api/users/logout");
  }
};
