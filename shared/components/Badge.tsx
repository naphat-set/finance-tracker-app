export default function Badge({ children, color = "gray" }: any) {
    const styles: any = {
        blue: "bg-blue-100 text-blue-600",
        orange: "bg-orange-100 text-orange-600",
        gray: "bg-gray-100 text-gray-600",
    };

    return (
        <span className={`px-2 py-1 rounded-full text-xs ${styles[color]}`}>
            {children}
        </span>
    );
} 