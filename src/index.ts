import express, { Application } from "express";
import "dotenv/config"

import { setupDatabase } from "./database";
import { staticRouter } from "./static"
import { apiRouter } from "./api";

// Constants
const PORT = process.env.SERVER_PORT || 8080;

const app: Application = express();

// Setup database
setupDatabase();

// Static content
app.use("/", staticRouter);

// API
app.use("/api", apiRouter);

// Start the server
app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});
