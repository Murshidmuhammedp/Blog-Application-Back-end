import express from 'express'
import { signIn, signUp } from '../Controllers/userController.js';

const router = express.Router();

// Register a new user
router.post('/register', signUp);
// Login user
router.post('/login', signIn);

export default router;
