import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from './Routes/userRoutes.js'
import adminRouter from './Routes/adminRoutes.js'
import blogRouter from './Routes/blogRoutes.js'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/blogs', blogRouter);

// Database Connecting

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

// Server Connecting

const PORT = process.env.PORT || 5286

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
