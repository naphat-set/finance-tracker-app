type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function Button({ children, className = "", ...props }: Props) {
    return (
        <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
      bg-[#3b5f7a] text-white hover:bg-[#2f4e66] ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}