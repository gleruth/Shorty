const mongoose = require("mongoose");
const { Schema } = mongoose;

const linkSchema = new Schema({
  longLink: String,
  shortLinkId: String,
  dateCreated: Date
});

mongoose.model("links", linkSchema);
