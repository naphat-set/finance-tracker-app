"use client";

import Button from "@/shared/components/Button";

export default function CategoryHeader({
    onAdd,
}: {
    onAdd: () => void;
}) {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-semibold">
                    Manage Categories
                </h1>
                <p className="text-sm text-gray-400">
                    Define your financial taxonomy. Organise transactions with bespoke labels.
                </p>
            </div>

            <Button onClick={onAdd}>
                + Add Category
            </Button>
        </div>
    );
}