import express, { Application } from "express";
import "dotenv/config"

import staticRouter from "./static"
import apiRouter from "./api";

// Constants
const PORT = process.env.PORT || 8080;

const app: Application = express();

// Static content
app.use("/", staticRouter);

// API
app.use("/api", apiRouter);

// Start the server
app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
});
