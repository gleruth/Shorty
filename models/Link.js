const mongoose = require("mongoose");
const { Schema } = mongoose;

const linkSchema = new Schema({
  longLink: String,
  dateCreated: Date
});

mongoose.model("links", linkSchema);
