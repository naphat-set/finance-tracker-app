"use client";

import { useEffect, useState } from "react";
import CategoryBar from "./CategoryBar";
import { getCategorySummary } from "../services/dashboard.service";

export default function CategoryList() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getCategorySummary().then(setData);
    }, []);

    // 🔥 หา max (สำคัญ)
    const maxValue = Math.max(
        ...data.map((item) => item.income + item.expense),
        1
    );

    return (
        <div className="bg-white rounded-xl shadow-sm p-5 mt-6">
            <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-medium">
                    Income vs. Expense by Category
                </h3>

                <div className="flex gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        Income
                    </div>

                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full"></span>
                        Expense
                    </div>
                </div>
            </div>

            <p className="text-xs text-gray-400 mb-4">
                Breakdown of primary daily expenses
            </p>

            {data.length === 0 ? (
                <div className="text-sm text-gray-400">
                    No data yet
                </div>
            ) : (
                data.map((item, index) => {
                    const total = item.income + item.expense;

                    return (
                        <CategoryBar
                            key={index}
                            label={item.name}
                            income={(item.income / maxValue) * 100}   // 🔥 เปลี่ยนตรงนี้
                            expense={(item.expense / maxValue) * 100} // 🔥 เปลี่ยนตรงนี้
                            rawIncome={item.income}   // 🔥 เพิ่ม
                            rawExpense={item.expense} // 🔥 เพิ่ม
                        />
                    );
                })
            )}
        </div>
    );
}