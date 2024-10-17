import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// Database Connecting

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

// Server Connecting

const PORT = process.env.PORT || 5286

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
