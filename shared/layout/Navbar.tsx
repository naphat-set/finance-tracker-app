"use client";

import { Bell, User } from "lucide-react";

export default function Navbar() {
    return (
        <div className="h-14 bg-white border-b flex items-center justify-between px-6">

            {/* LEFT */}
            <div className="text-sm text-gray-400">

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Bell size={18} className="text-gray-500 cursor-pointer" />

                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User size={16} />
                </div>
            </div>
        </div>
    );
}