import { ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline-black"
  | "outline-primary"
  | "outline-secondary"
  | "outline-tertiary"
  | "ghost-black"
  | "ghost-white"
  | "ghost-primary"
  | "ghost-secondary"
  | "ghost-tertiary";

const variants: Record<ButtonVariant, string> = {
  "default":           "bg-[#1a1c1c] text-white hover:bg-[#333333]",
  "primary":           "bg-[#b02f00] text-white hover:bg-[#8f2600]",
  "secondary":         "bg-[#ff5722] text-white hover:bg-[#e64a19]",
  "tertiary":          "bg-[#f3f3f3] text-[#1a1c1c] hover:bg-[#e8e8e8]",
  "outline-black":     "border border-[#1a1c1c] text-[#1a1c1c] hover:bg-[#1a1c1c] hover:text-white",
  "outline-primary":   "border border-[#b02f00] text-[#b02f00] hover:bg-[#b02f00] hover:text-white",
  "outline-secondary": "border border-[#ff5722] text-[#ff5722] hover:bg-[#ff5722] hover:text-white",
  "outline-tertiary":  "border border-[#999999] text-[#666666] hover:border-[#666666] hover:text-[#1a1c1c]",
  "ghost-black":       "text-[#1a1c1c] hover:bg-[#f3f3f3]",
  "ghost-white":       "text-white hover:bg-white/10",
  "ghost-primary":     "text-[#b02f00] hover:bg-[#b02f00]/10",
  "ghost-secondary":   "text-[#ff5722] hover:bg-[#ff5722]/10",
  "ghost-tertiary":    "text-[#666666] hover:bg-[#f3f3f3]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-[13px] font-bold px-8 py-4 tracking-[0.1em] transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
