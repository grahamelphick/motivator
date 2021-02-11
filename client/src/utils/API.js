import axios from "axios";

// eslint-disable-next-line
export default {
  // Gets all books
  getGoals: function () {
    return axios.get("/api/goals");
  },
  // Gets the book with the given id
  getGoal: function (id) {
    return axios.get("/api/goals/" + id);
  },
  // Deletes the book with the given id
  deleteGoal: function (id) {
    return axios.delete("/api/goals/" + id);
  },
  // Saves a book to the database
  saveGoal: function (bookData) {
    return axios.post("/api/goals", bookData);
  }
};
