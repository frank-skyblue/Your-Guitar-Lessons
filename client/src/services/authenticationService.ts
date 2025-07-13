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
            const response = await fetch(`${API_BASE_URL}/api/login`, {
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
            const token = localStorage.getItem("authToken");

            if (token) {
                const response = await fetch(`${API_BASE_URL}/api/logout`, {
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

    // Helper function to get token from localStorage
    getToken: (): string | null => {
        return localStorage.getItem("authToken");
    },

    // Helper function to check if user is authenticated
    isAuthenticated: (): boolean => {
        return !!localStorage.getItem("authToken");
    },

    storeToken: (token: string) => {
        localStorage.setItem("authToken", token);
    },

    register: async (credentials: LoginCredentials & { name?: string }): Promise<LoginResponse> => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/register`, {
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