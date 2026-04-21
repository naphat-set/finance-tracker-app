"use client";

import { useState } from "react";

export default function SummaryHeader() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Dashboard Summary
      </h1>

      <div className="flex gap-3">

        {/* DATE */}
        <div className="flex gap-2 bg-white border rounded-lg p-2 shadow-sm">
          <input
            type="date"
            className="text-sm outline-none"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <span className="text-gray-400">-</span>
          <input
            type="date"
            className="text-sm outline-none"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <select
          className="bg-white border rounded-lg px-3 py-2 text-sm shadow-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {/* รอ API */}
        </select>
      </div>
    </div>
  );
}