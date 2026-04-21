"use client";

import Button from "@/shared/components/Button";

export default function UsersHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold">
          Users
        </h1>
        <p className="text-sm text-gray-400">
          Manage and view all users in the system.
        </p>
      </div>

      {/* <Button>
        + Add User
      </Button> */}
    </div>
  );
}