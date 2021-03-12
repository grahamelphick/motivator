import axios from "axios";

// eslint-disable-next-line
export default {
  getGoals: function () {
    return axios.get("/api/goals");
  },
   getGoal: function (id) {
    return axios.get("/api/goals/" + id);
  },
  deleteGoal: function (id) {
    return axios.delete("/api/goals/" + id);
  },
  saveGoal: function (goalData) {
    console.log("goal controller");
    return axios.post("/api/goals", goalData);
  },

  getJournals: function () {
    return axios.get("/api/journals");
  },
  getJournal: function (id) {
    return axios.get("/api/journals/" + id);
  },
  deleteJournal: function (id) {
    return axios.delete("/api/journals/" + id);
  },
  saveJournal: function (journalData) {
    console.log("journal controller");
    return axios.post("/api/journals", journalData);
  }
};
