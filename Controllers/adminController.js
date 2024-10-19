import dotenv from 'dotenv';
import Jwt from 'jsonwebtoken';
dotenv.config();

export const adminLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Authentication
        if (process.env.ADMIN_EMAIL === email && process.env.ADMIN_PASSWORD === password) {
            // Generate JWT
            const token = Jwt.sign({ email }, process.env.ADMIN_JWT_SECRET_KEY);

            return res.cookie('access_token', token, { httpOnly: true })
                .status(200).json({ message: "admin login successfully", token });

        } else {
            return res.status(404).json({ message: "Unauthorized" });
        }
    } catch (error) {
        console.error(error);
    }
}