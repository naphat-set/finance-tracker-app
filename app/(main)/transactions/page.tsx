"use client";

import { useState } from "react";
import TransactionHeader from "@/features/transactions/components/TransactionHeader";
import TransactionSummary from "@/features/transactions/components/TransactionSummary";
import TransactionTable from "@/features/transactions/components/TransactionTable";
import TransactionModal from "@/features/transactions/components/TransactionModal";

export default function TransactionsPage() {
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState<any>(null);

    return (
        <div>
            <TransactionHeader
                onAdd={() => {
                    setEditData(null);
                    setOpen(true);
                }}
            />

            <TransactionSummary />

            <TransactionTable
                onEdit={(data) => {
                    setEditData(data);
                    setOpen(true);
                }}
            />

            <TransactionModal
                open={open}
                onClose={() => setOpen(false)}
                editData={editData}
            />
        </div>
    );
}