"use client";

import { useEffect, useState } from "react";

export default function TransactionSummary() {
    const [data, setData] = useState({
        total_income: 0,
        total_expense: 0,
    });

    useEffect(() => {
        const load = async () => {
            const user = JSON.parse(localStorage.getItem("user") || "{}");

            const res = await fetch("/api/dashboard/summary", {
                headers: {
                    userid: user.id,
                },
            });

            const json = await res.json();
            setData(json);
        };

        load();
    }, []);

    return (
        <div className="flex gap-4 mb-6">
            <div className="flex-1 bg-white p-5 rounded-xl shadow-sm">
                <p className="text-xs text-gray-400">TOTAL INCOME</p>
                <h2 className="text-2xl text-blue-600 font-semibold">
                    {Number(data.total_income).toLocaleString()}
                </h2>
            </div>

            <div className="flex-1 bg-white p-5 rounded-xl shadow-sm">
                <p className="text-xs text-gray-400">TOTAL EXPENSE</p>
                <h2 className="text-2xl text-orange-500 font-semibold">
                    {Number(data.total_expense).toLocaleString()}
                </h2>
            </div>
        </div>
    );
}