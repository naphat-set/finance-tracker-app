import "../globals.css";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-[#f5f7fb]">
            {children}
        </div>
    );
}