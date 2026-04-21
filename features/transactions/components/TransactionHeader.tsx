"use client";

export default function TransactionHeader({
    onAdd,
}: {
    onAdd: () => void;
}) {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-semibold">Transactions</h1>
                <p className="text-sm text-gray-400">
                    Manage and monitor your financial flows
                </p>
            </div>

            <button
                onClick={onAdd}
                className="bg-[#3b5f7a] text-white px-4 py-2 rounded-lg shadow hover:bg-[#2f4e66]"
            >
                + Add Transaction
            </button>
        </div>
    );
}