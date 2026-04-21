"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Card from "@/shared/components/Card";
import {
    getTransactions,
    deleteTransaction,
} from "../services/transaction.service";

export default function TransactionTable({
    onEdit,
}: {
    onEdit: (data: any) => void;
}) {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const load = async () => {
        try {
            const res = await getTransactions();

            console.log("API:", res); // 👈 debug

            if (res && res.data) {
                setData(res.data);
            } else {
                setData([]);
            }
        } catch (err) {
            console.error("LOAD ERROR:", err);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    if (loading) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <Card>
            {/* HEADER */}
            <div className="grid grid-cols-5 text-xs text-gray-400 border-b pb-2 mb-3">
                <div>DATE</div>
                <div>DESCRIPTION</div>
                <div>CATEGORY</div>
                <div>AMOUNT</div>
                <div>ACTIONS</div>
            </div>

            {/* EMPTY */}
            {data.length === 0 ? (
                <div className="text-sm text-gray-400 text-center py-10">
                    No transactions yet
                </div>
            ) : (
                data.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-5 py-2 text-sm border-b items-center"
                    >
                        <div>
                            {new Date(item.date).toLocaleDateString()}
                        </div>

                        <div>{item.note || "-"}</div>

                        <div>{item.category_name}</div>

                        <div
                            className={
                                item.type === "income"
                                    ? "text-blue-600"
                                    : "text-orange-500"
                            }
                        >
                            {Number(item.amount).toLocaleString()}
                        </div>

                        <div className="flex gap-2">
                            <Pencil
                                className="w-4 cursor-pointer"
                                onClick={() => onEdit(item)}
                            />

                            <Trash2
                                className="w-4 cursor-pointer"
                                onClick={async () => {
                                    if (!confirm("Delete this transaction?"))
                                        return;

                                    await deleteTransaction(item.id);
                                    load(); // reload data
                                }}
                            />
                        </div>
                    </div>
                ))
            )}
        </Card>
    );
}