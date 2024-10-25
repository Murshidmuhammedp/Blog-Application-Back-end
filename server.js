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

// app.use(cors({
//     // origin: "http://localhost:3000",
//     origin: "https://blog-app-future-tech.vercel.app",
//     credentials: true
// }));

app.use(cors({
    origin: [
        "https://blog-app-future-tech.vercel.app",
        "https://blog-application-front-9k1wqwz4b-murshidmuhammedps-projects.vercel.app/"
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
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
