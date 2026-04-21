"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt, Folder, User } from "lucide-react";

const menus = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Transactions", href: "/transactions", icon: Receipt },
    { name: "Categories", href: "/categories", icon: Folder },
    { name: "Users", href: "/users", icon: User },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen bg-[#f7f9fc] border-r flex flex-col justify-between">

            {/* TOP */}
            <div>
                <div className="p-5 text-blue-600 font-semibold text-lg">
                    Finance
                </div>

                <div className="px-3 space-y-2">
                    {menus.map((menu) => {
                        const Icon = menu.icon;
                        const active = pathname === menu.href;

                        return (
                            <Link
                                key={menu.name}
                                href={menu.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                  ${active
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-gray-500 hover:bg-gray-100"
                                    }`}
                            >
                                <Icon size={18} />
                                {menu.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* BOTTOM PROFILE */}
            <div className="p-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                    N
                </div>
            </div>
        </div>
    );
}