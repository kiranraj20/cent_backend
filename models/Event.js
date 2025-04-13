import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  color: { type: String, default: "#ff5733" },
  category: { type: String, default: "work" },
});

export default model("Event", eventSchema);
