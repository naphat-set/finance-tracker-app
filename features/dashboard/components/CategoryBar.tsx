type Props = {
  label: string;
  income?: number;
  expense?: number;
  rawIncome?: number;
  rawExpense?: number;
};

export default function CategoryBar({
  label,
  income = 0,
  expense = 0,
  rawIncome = 0,
  rawExpense = 0,
}: Props) {
  return (
    <div className="mb-5">
      {/* 🔥 label + number */}
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span className="uppercase">{label}</span>
        <span>
          ${rawIncome} / ${rawExpense}
        </span>
      </div>

      {/* 🔥 bar เดียว */}
      <div className="w-full bg-gray-200 rounded-full h-4 flex overflow-hidden">
        {income > 0 && (
          <div
            className="bg-blue-600"
            style={{ width: `${income}%` }}
          />
        )}

        {expense > 0 && (
          <div
            className="bg-yellow-600"
            style={{ width: `${expense}%` }}
          />
        )}
      </div>
    </div>
  );
}