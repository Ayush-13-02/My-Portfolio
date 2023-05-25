const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  Picture: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Deploy: {
    type: String,
    required: true,
  },
  Share: {
    type: String,
    required: true,
  }
});

mongoose.models={};
module.exports = mongoose.model("Project", ProjectSchema);