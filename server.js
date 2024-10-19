import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from './Routes/userRouter.js'

dotenv.config()
const app = express()

app.use(express.json());

app.use('/api/v1/users', userRouter)

// Database Connecting

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

// Server Connecting

const PORT = process.env.PORT || 5286

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
