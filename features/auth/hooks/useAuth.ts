"use client";

import { useRouter } from "next/navigation";
import { loginApi } from "../services/auth.service";

export default function useAuth() {
    const router = useRouter();

    const login = async (data: {
        email: string;
        password: string;
    }) => {
        try {
            const res = await loginApi(data);

            localStorage.setItem("user", JSON.stringify(res.data));

            router.push("/dashboard");
        } catch (err: any) {
            alert(err?.response?.data?.message || "Login failed");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return { login, logout };
}