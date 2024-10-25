import blogjoi from "../joiValidation/blogValidation.js";
import Blogs from "../Models/blogSchema.js";

// Create a new Blogs

export const blogCreate = async (req, res, next) => {
    try {

        const { BlogTitle, Date, Category, AuthorName, ParagraphTitle, Description } = req.body

        if (!BlogTitle || !Date || !AuthorName || !ParagraphTitle || !Description) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const newBlog = new Blogs({
            BlogTitle,
            Date,
            Category,
            AuthorName,
            ParagraphTitle,
            Description,
            image: req.cloudinaryImageUrl
        });

        await newBlog.save();

        return res.status(201).json({ message: "Blog added successfully", data: newBlog });

    } catch (error) {
        console.error("Error creating blog:", error);
    }
}

// Get the all Blogs

export const getAllBlogs = async (req, res, next) => {
    try {

        const blogs = await Blogs.find();
        return res.status(200).json({ message: "Data fetched", data: blogs })
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
}

// Get a specific blog by ID

export const getBlogById = async (req, res, next) => {
    try {
        const Id = req.params.Id;

        if (!Id) {
            return res.status(404).json({ message: "Id not provided" });
        };

        const blog = await Blogs.findById(Id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        return res.status(200).json({ success: true, data: blog });
    } catch (error) {
        console.error("Error fetching blogs:", error);

    }
}

// Update a blog by ID

export const updateBlog = async (req, res, next) => {
    try {
        const Id = req.params.id;
        if (!Id) {
            return res.status(404).json({ message: "Id not provided" }); 
        };

        const { BlogTitle, Date, Category, AuthorName, ParagraphTitle, Description } = req.body;

        const updatedField = {};
        if (BlogTitle) updatedField.BlogTitle = BlogTitle
        if (Date) updatedField.Date = Date
        if (Category) updatedField.Category = Category
        if (req.cloudinaryImageUrl) updatedField.image = req.cloudinaryImageUrl
        if (AuthorName) updatedField.AuthorName = AuthorName
        if (ParagraphTitle) updatedField.ParagraphTitle = ParagraphTitle
        if (Description) updatedField.Description = Description

        const updatedBlog = await Blogs.findByIdAndUpdate(
            Id,
            { $set: updatedField },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        return res.status(200).json({ message: "Blog updated successfully", data: updatedBlog });
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
}

// Delete a blog by ID

export const deleteBlog = async (req, res, next) => {
    try {

        const Id = req.params.Id;
        if (!Id) {
            return res.status(404).json({ message: "Id not provided" });
        };
        const deleteBlog = await Blogs.findByIdAndDelete(Id);

        if (!deleteBlog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        return res.status(200).json({ success: true, message: "Blog deleted successfully" });

    } catch (error) {
        console.error("Error deleting blog:", error);
    }
}

