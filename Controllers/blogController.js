import blogjoi from "../joiValidation/blogValidation.js";
import Blogs from "../Models/blogSchema.js";

// Create a new Blogs

export const blogCreate = async (req, res, next) => {
    try {

        const { value, error } = blogjoi.validate(req.body);

        if (error) {
            return res.status(409).json({ message: "Validation error", details: error });
        };

        const { BlogTitle, Date, Category, AuthorName, ParagraphTitle, Description } = value

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
        const Id = req.params.Id;
        if (!Id) {
            return res.status(404).json({ message: "Id not provided" });
        };

        const { title, content, auther_name, category } = req.body;

        const updatedField = {};
        if (title) updatedField.title = title
        if (content) updatedField.content = content
        if (auther_name) updatedField.auther_name = auther_name
        if (req.cloudinaryImageUrl) updatedField.image = req.cloudinaryImageUrl
        if (category) updatedField.category = category

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

