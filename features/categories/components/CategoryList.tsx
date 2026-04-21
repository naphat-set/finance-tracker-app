"use client";

import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import Card from "@/shared/components/Card";
import { getCategories } from "../services/category.service";

export default function CategoryList({
    reload,
    onEdit,
}: {
    reload: boolean;
    onEdit: (item: any) => void;
}) {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getCategories().then(setData);
    }, [reload]);

    return (
        <div className="space-y-4">

            {/* HEADER */}
            <div className="grid grid-cols-3 text-xs text-gray-400 px-2">
                <div>CATEGORY IDENTITY</div>
                <div>TRANSACTION VOLUME</div>
                <div>ACTIONS</div>
            </div>

            {data.length === 0 ? (
                <Card>
                    <div className="text-center text-gray-400 py-10">
                        No categories yet
                    </div>
                </Card>
            ) : (
                data.map((item) => (
                    <Card key={item.id}>
                        <div className="grid grid-cols-3 items-center text-sm">

                            {/* NAME */}
                            <div>{item.name}</div>

                            {/* COUNT */}
                            <div>{item.total_transactions}</div>

                            {/* ACTION */}
                            <div className="flex gap-3">
                                <Pencil
                                    size={16}
                                    className="cursor-pointer"
                                    onClick={() => onEdit(item)}
                                />
                            </div>

                        </div>
                    </Card>
                ))
            )}

        </div>
    );
}