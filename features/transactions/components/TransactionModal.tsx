"use client";

import { useEffect, useState } from "react";
import Modal from "@/shared/components/Modal";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import {
    createTransaction,
    updateTransaction,
} from "../services/transaction.service";

export default function TransactionModal({
    open,
    onClose,
    editData,
}: {
    open: boolean;
    onClose: () => void;
    editData?: any;
}) {
    const [form, setForm] = useState({
        type: "income",
        amount: "",
        date: "",
        category_id: 0,
    });

    const categories = [
        { id: 1, name: "Living & Housing" },
        { id: 2, name: "Food & Dining" },
        { id: 3, name: "Transport" },
        { id: 4, name: "Healthcare" },
        { id: 5, name: "Shopping" },
        { id: 6, name: "Salary" },
        { id: 7, name: "Gift & Others" },
    ];

    // ✅ FIX สำคัญสุด
    useEffect(() => {
        if (editData && editData.id) {
            setForm({
                type: editData.type || "income",
                amount: String(editData.amount || ""),
                date: editData.date?.slice(0, 10) || "",
                category_id: Number(editData.category_id) || 0,
            });
        } else {
            setForm({
                type: "income",
                amount: "",
                date: "",
                category_id: 0,
            });
        }
    }, [editData]);

    return (
        <Modal open={open} onClose={onClose}>
            <h2 className="text-lg font-semibold mb-4">
                {editData && editData.id
                    ? "Edit Transaction"
                    : "Add Transaction"}
            </h2>

            {/* TYPE */}
            <select
                className="w-full border p-2 rounded mb-3"
                value={form.type}
                onChange={(e) =>
                    setForm({ ...form, type: e.target.value })
                }
            >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            {/* AMOUNT */}
            <Input
                placeholder="Amount"
                className="mb-3"
                value={form.amount}
                onChange={(e) =>
                    setForm({ ...form, amount: e.target.value })
                }
            />

            {/* DATE */}
            <Input
                type="date"
                className="mb-3"
                value={form.date}
                onChange={(e) =>
                    setForm({ ...form, date: e.target.value })
                }
            />

            {/* CATEGORY */}
            <select
                className="w-full border p-2 rounded mb-4"
                value={form.category_id || 0}
                onChange={(e) =>
                    setForm({
                        ...form,
                        category_id: Number(e.target.value),
                    })
                }
            >
                <option value={0}>Select category</option>

                {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>

            {/* ACTION */}
            <div className="flex justify-end gap-2">
                <button onClick={onClose}>Cancel</button>

                <Button
                    onClick={async () => {
                        if (
                            form.amount === "" ||
                            form.date === "" ||
                            form.category_id === 0
                        ) {
                            alert("Please fill all fields");
                            return;
                        }

                        const payload = {
                            category_id: form.category_id,
                            amount: Number(form.amount),
                            type: form.type,
                            note: "",
                            date: form.date,
                        };

                        try {
                            if (editData && editData.id) {
                                await updateTransaction(
                                    Number(editData.id),
                                    payload
                                );
                            } else {
                                await createTransaction(payload);
                            }

                            onClose();
                            location.reload();
                        } catch (err) {
                            console.error(err);
                            alert("Something went wrong");
                        }
                    }}
                >
                    Save
                </Button>
            </div>
        </Modal>
    );
}