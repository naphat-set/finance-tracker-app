"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import useAuth from "@/features/auth/hooks/useAuth";

export default function LoginPage() {
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",        // ✅ เปลี่ยน
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        let newErrors: any = {};

        if (!form.email) {
            newErrors.email = "Email is required";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        }

        return newErrors;
    };

    const handleSubmit = async () => {
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setLoading(true);

        try {
            await login(form); // 🔥 ยิง API จริง
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-[#f3f5f9]">
            <div className="w-[380px] bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-8">

                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-[#3b5f7a] rounded-xl flex items-center justify-center shadow-md">
                        <span className="text-white text-lg">▣</span>
                    </div>
                </div>

                <h1 className="text-[18px] font-semibold text-gray-800 mb-1">
                    Welcome Back
                </h1>

                <p className="text-[13px] text-gray-400 mb-6">
                    Please enter your credentials to access your workspace.
                </p>

                {/* EMAIL */}
                <div className="mb-4">
                    <label className="text-[11px] text-gray-400 mb-1 block">
                        EMAIL
                    </label>

                    <div className="relative">
                        <Input
                            placeholder="Email"
                            className={`pl-9 ${errors.email ? "border-red-500" : ""}`}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
                            👤
                        </span>
                    </div>

                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* PASSWORD */}
                <div className="mb-4">
                    <label className="text-[11px] text-gray-400 mb-1 block">
                        PASSWORD
                    </label>

                    <div className="relative">
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className={`pl-9 pr-10 ${errors.password ? "border-red-500" : ""}`}
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                        />

                        <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
                            🔒
                        </span>

                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </span>
                    </div>

                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full flex justify-center"
                >
                    {loading ? "Loading..." : "Login"}
                </Button>
            </div>
        </div>
    );
}