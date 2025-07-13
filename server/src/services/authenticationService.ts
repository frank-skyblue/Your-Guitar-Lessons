import { User } from '../models/User';
import jwt from 'jsonwebtoken';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    token?: string;
    user?: {
        id: string;
        email: string;
        name?: string;
    };
}

export const authenticationService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        try {
            const { email, password } = credentials;

            if (!email || !password) {
                return {
                    success: false,
                    message: "Email and password are required"
                };
            }

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return {
                    success: false,
                    message: "Invalid credentials"
                };
            }

            // Compare password
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return {
                    success: false,
                    message: "Invalid credentials"
                };
            }

            // Generate JWT token (replace 'your_jwt_secret' with your actual secret)
            const token = jwt.sign(
                { id: user._id.toString(), email: user.email, name: user.name },
                process.env.JWT_SECRET || 'your_jwt_secret',
                { expiresIn: '1d' }
            );

            return {
                success: true,
                message: "Login successful",
                token,
                user: {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name
                }
            };
        } catch (error) {
            return {
                success: false,
                message: "Authentication failed"
            };
        }
    },

    register: async (credentials: LoginCredentials & { name?: string }): Promise<LoginResponse> => {
        try {
            const { email, password, name } = credentials;
            if (!email || !password) {
                return {
                    success: false,
                    message: "Email and password are required"
                };
            }
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return {
                    success: false,
                    message: "User already exists"
                };
            }
            // Create new user
            const newUser = new User({ email, password, name });
            await newUser.save();
            // Generate JWT token
            const token = jwt.sign(
                { id: newUser._id.toString(), email: newUser.email, name: newUser.name },
                process.env.JWT_SECRET || 'your_jwt_secret',
                { expiresIn: '1d' }
            );
            return {
                success: true,
                message: "Registration successful",
                token,
                user: {
                    id: newUser._id.toString(),
                    email: newUser.email,
                    name: newUser.name
                }
            };
        } catch (error) {
            return {
                success: false,
                message: "Registration failed"
            };
        }
    },

    logout: async (token: string): Promise<{ success: boolean; message: string }> => {
        try {
            // TODO: Add actual logout logic here (e.g., blacklist token)
            // For now, we'll simulate a successful logout
            return {
                success: true,
                message: "Logout successful"
            };
        } catch (error) {
            return {
                success: false,
                message: "Logout failed"
            };
        }
    }
};