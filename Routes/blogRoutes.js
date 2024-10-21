import express from 'express';
import { blogCreate, deleteBlog, getAllBlogs, getBlogById, updateBlog } from '../Controllers/blogController.js';

const router=express.Router();

// Create a new blogs
router.post('/create', blogCreate);

// Get all blogs
router.get('/', getAllBlogs);

// Get a single blog by ID
router.get('/:Id', getBlogById);

// Update a blog by ID
router.patch('/:Id', updateBlog);

// Delete a blog by ID
router.delete('/:Id', deleteBlog);

export default router;