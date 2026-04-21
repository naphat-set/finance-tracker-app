"use client";

import { useEffect, useState } from "react";
import Card from "@/shared/components/Card";
import { getUsers } from "../services/user.service";

export default function UsersTable() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        getUsers().then(setData);
    }, []);

    // function คำนวณอายุ
    const getAge = (birthDate: string) => {
        const birth = new Date(birthDate);
        const today = new Date();

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        return `${years} ปี ${months} เดือน`;
    };

    return (
        <Card>

            {/* HEADER */}
            <div className="grid grid-cols-5 text-xs text-gray-400 border-b pb-3 mb-4">
                <div>FULL NAME</div>
                <div>EMAIL</div>
                <div>AGE</div>
                <div>TOTAL INCOME</div>
                <div>TOTAL EXPENSE</div>
            </div>

            {/* DATA */}
            {data.length === 0 ? (
                <div className="text-center text-gray-400 py-10">
                    No users yet
                </div>
            ) : (
                data.map((user) => (
                    <div
                        key={user.id}
                        className="grid grid-cols-5 text-sm py-3 border-b last:border-none"
                    >
                        <div>
                            {user.first_name} {user.last_name}
                        </div>

                        <div>{user.email}</div>

                        <div>{getAge(user.birth_date)}</div>

                        <div className="text-blue-600">
                            ${user.total_income}
                        </div>

                        <div className="text-orange-500">
                            ${user.total_expense}
                        </div>
                    </div>
                ))
            )}

        </Card>
    );
}