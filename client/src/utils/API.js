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
    return axios.post("/api/journals", journalData);
  },

  getMantra: function () {
    return axios.get("/api/mantra");
  },
  updateMantra: function (mantraData) {
    console.log("got to API");
    return axios.put("/api/mantra", mantraData);
  }
};
