import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    BlogTitle: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    Date: {
        type: String,
        required: true
    },
    AuthorName: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    ParagraphTitle: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blogs = mongoose.model("Blogs", blogSchema);

export default Blogs;