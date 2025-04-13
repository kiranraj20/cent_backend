import { Schema, model } from "mongoose";

const goalSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, default: "#ff5733" },
});

export default model("Goal", goalSchema);
