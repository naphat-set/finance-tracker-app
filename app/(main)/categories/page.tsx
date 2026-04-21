"use client";

import { useState } from "react";
import CategoryHeader from "@/features/categories/components/CategoryHeader";
import CategoryList from "@/features/categories/components/CategoryList";
import CategoryModal from "@/features/categories/components/CategoryModal";

export default function CategoriesPage() {
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
    const [editData, setEditData] = useState<any>(null);

    return (
        <div>
            <CategoryHeader onAdd={() => setOpen(true)} />

            <CategoryList
                reload={reload}
                onEdit={(item) => {
                    setEditData(item);
                    setOpen(true);
                }}
            />

            <CategoryModal
                open={open}
                onClose={() => {
                    setOpen(false);
                    setEditData(null);
                }}
                onSuccess={() => setReload(!reload)}
                editData={editData}
            />
        </div>
    );
}