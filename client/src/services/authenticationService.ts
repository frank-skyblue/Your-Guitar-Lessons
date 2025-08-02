import { getStoredToken } from "../util/helpers";

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

export interface LogoutResponse {
    success: boolean;
    message: string;
}

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const authenticationService = {
    login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                message: "Network error occurred"
            };
        }
    },

    logout: async (): Promise<LogoutResponse> => {
        try {
            const token = getStoredToken();

            if (token) {
                const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                return data;
            } else {
                return {
                    success: true,
                    message: "No active session to logout"
                };
            }
        } catch (error) {
            return {
                success: false,
                message: "Network error occurred"
            };
        }
    },

    register: async (credentials: LoginCredentials & { name?: string }): Promise<LoginResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                message: "Network error occurred"
            };
        }
    },
};