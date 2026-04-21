import api from "@/lib/api";

export const loginApi = (data: { email: string; password: string }) => {
    return api.post("/auth/login", data);
};