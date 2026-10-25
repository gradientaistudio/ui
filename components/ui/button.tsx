import Link from "next/link"

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const baseClasses =
    "cursor-pointer inline-block rounded-full bg-charcoal px-6 py-2 text-white transition-opacity duration-300 hover:opacity-80 dark:bg-white dark:text-charcoal dark:hover:opacity-80";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
