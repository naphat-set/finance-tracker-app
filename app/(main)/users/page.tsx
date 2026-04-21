"use client";

import UsersHeader from "@/features/users/components/UsersHeader";
import UsersTable from "@/features/users/components/UsersTable";

export default function UsersPage() {
    return (
        <div>
            <UsersHeader />
            <UsersTable />
        </div>
    );
}