type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: Props) {
    return (
        <input
            className={`w-full bg-[#f1f3f7] border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none ${className}`}
            {...props}
        />
    );
}