"use client";

import { useEffect, useState } from "react";
import Modal from "@/shared/components/Modal";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import { createCategory, updateCategory } from "../services/category.service";

export default function CategoryModal({
    open,
    onClose,
    onSuccess,
    editData, // 
}: {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    editData?: any; // 
}) {
    const [form, setForm] = useState({
        name: "",
    });

    // 🔥 set ค่าเวลา edit
    useEffect(() => {
        if (editData) {
            setForm({ name: editData.name });
        }
    }, [editData]);

    const handleSubmit = async () => {
        if (!form.name) return;

        if (editData) {
            await updateCategory(editData.id, { name: form.name });
        } else {
            await createCategory({ name: form.name });
        }

        onSuccess();
        onClose();
        setForm({ name: "" });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <h2 className="text-lg font-semibold mb-4">
                {editData ? "Edit Category" : "Add Category"}
            </h2>

            <Input
                placeholder="Category Name"
                className="mb-4"
                value={form.name}
                onChange={(e) =>
                    setForm({ name: e.target.value })
                }
            />

            <div className="flex justify-end gap-2">
                <button onClick={onClose}>Cancel</button>
                <Button onClick={handleSubmit}>
                    Save
                </Button>
            </div>
        </Modal>
    );
}