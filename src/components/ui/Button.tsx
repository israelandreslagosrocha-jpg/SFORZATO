import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-gold)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98] overflow-hidden group';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 tracking-wider uppercase',
    md: 'text-xs sm:text-sm px-6 py-3 tracking-widest uppercase font-semibold',
    lg: 'text-sm sm:text-base px-8 py-4 tracking-widest uppercase font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59F38] text-[#050811] shadow-[0_0_25px_rgba(229,192,88,0.25)] hover:shadow-[0_0_35px_rgba(229,192,88,0.45)] hover:brightness-105 border border-[#FFF4D0]/50 font-bold',
    secondary:
      'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-md',
    outline:
      'border border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)] hover:text-[#050811]',
    glass:
      'bg-[var(--color-accent-gold)]/10 hover:bg-[var(--color-accent-gold)]/20 text-[var(--color-accent-gold)] border border-[var(--color-accent-gold)]/30 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
