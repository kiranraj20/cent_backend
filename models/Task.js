import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  name: { type: String, required: true },
  goalId: { type: Schema.Types.ObjectId, ref: "Goal", required: true },
  duration: { type: Number, required: true },
});

export default model("Task", taskSchema);
