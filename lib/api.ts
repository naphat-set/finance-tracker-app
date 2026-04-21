import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

api.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("user");

        if (user) {
            const parsed = JSON.parse(user);
            config.headers.userid = parsed.id;
        }
    }

    return config;
});

export default api;