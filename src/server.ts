import cors from "cors";
import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import config from './config/config';
import { connectDatabase } from "./database/database";

const app = express();
app.use(express.json());

// Global error handler (should be after routes)
app.use(errorHandler);


// Client-side CORS configuration
app.use(cors({
  origin: `http://localhost:${config.clientPort}`,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


// Routes
app.use(config.apiUrl, itemRoutes);


// Database connection
if (!config.mongoUri) {
  throw new Error("Missing MONGODB_URI in .env");
}

connectDatabase(config.mongoUri)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`✅ Server running on http://localhost:${config.port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });


export default app;