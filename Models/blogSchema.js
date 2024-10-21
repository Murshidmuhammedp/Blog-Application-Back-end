import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    auther_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blogs = mongoose.model("Blogs", blogSchema);

export default Blogs;