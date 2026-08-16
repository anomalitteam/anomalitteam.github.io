import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-accent-surface text-on-accent hover:bg-accent-surface-hover active:bg-accent-surface-hover/90",
  secondary:
    "bg-bg-secondary text-text-primary border border-border hover:bg-border/30 dark:hover:bg-white/10",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-bg-secondary",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-sm rounded-xl",
  lg: "px-8 py-3 text-base rounded-xl",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  className = "",
}: ButtonProps) {
  const classes = `${variants[variant]} ${sizes[size]} inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`;

  if (href && !disabled) {
    // Los enlaces externos salen como <a> con target/rel; Link es para rutas internas.
    if (/^(https?:)?\/\//.test(href) || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${classes} ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      {children}
    </button>
  );
}
