"use client";

import { useEffect, useState } from "react";
import SummaryHeader from "@/features/dashboard/components/SummaryHeader";
import SummaryCard from "@/features/dashboard/components/SummaryCard";
import CategoryList from "@/features/dashboard/components/CategoryList";
import { getSummary } from "@/features/dashboard/services/dashboard.service";

export default function DashboardPage() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        getSummary().then(setData);
    }, []);

    return (
        <div className="p-6 bg-[#f5f7fb] min-h-screen">
            <SummaryHeader />

            <div className="flex gap-4">
                <SummaryCard
                    title="TOTAL INCOME"
                    color="text-blue-600"
                    amount={data?.total_income}
                />

                <SummaryCard
                    title="TOTAL EXPENSE"
                    color="text-orange-500"
                    amount={data?.total_expense}
                />
            </div>

            <CategoryList />
        </div>
    );
}