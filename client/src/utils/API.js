import axios from "axios";

// eslint-disable-next-line
export default {
  // Gets all Subtasks
  getSubtasks: function() {
    return axios.get("/api/goals");
  },
  // Gets the Subtasks with the given id
  getSubtask: function(id) {
    return axios.get("/api/subtasks/" + id);
  },
  // Deletes the Subtasks with the given id
  deleteSubtasks: function(id) {
    return axios.delete("/api/subtasks/" + id);
  },
  // Saves a Subtasks to the database
  saveSubtasks: function(SubtasksData) {
    return axios.post("/api/subtasks", SubtasksData);
  }
};
