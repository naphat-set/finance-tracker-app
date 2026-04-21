import Sidebar from "@/shared/layout/Sidebar";
import Navbar from "@/shared/layout/Navbar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">

            {/* Sidebar */}
            <Sidebar />

            {/* Main */}
            <div className="flex-1 flex flex-col h-screen">

                {/* Navbar */}
                <Navbar />

                {/* Content */}
                <div className="flex-1 overflow-y-auto bg-[#f5f7fb] p-6">
                    {children}
                </div>

            </div>
        </div>
    );
}