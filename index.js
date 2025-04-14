import express, { json } from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import apiRoutes from "./routes/api.js";
import corsMiddleware from "./middleware/cors.js";

config();

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(json());

// Connect to MongoDB
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
