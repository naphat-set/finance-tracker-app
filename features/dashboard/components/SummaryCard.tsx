import Card from "@/shared/components/Card";

type Props = {
    title: string;
    amount?: number;
    color: string;
};

export default function SummaryCard({ title, amount, color }: Props) {
    return (
        <Card>
            <p className="text-xs text-gray-400 mb-2">{title}</p>

            <h2 className={`text-2xl font-semibold ${color}`}>
                {amount !== undefined ? `$${amount}` : "--"}
            </h2>
        </Card>
    );
}