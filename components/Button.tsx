import Link from "next/link";

export default function Button({ href, children, variant = "primary" }: { href: string, children: React.ReactNode, variant?: "primary" | "secondary" }) {
  const styles = {
    primary: "bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30",
    secondary: "bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-500",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}