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
      'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#996515] text-white shadow-[0_4px_20px_rgba(184,134,11,0.30)] hover:shadow-[0_6px_25px_rgba(184,134,11,0.45)] hover:brightness-105 border border-[#F3E5AB]/40 font-bold',
    secondary:
      'bg-white/80 hover:bg-white text-[#0F172A] border border-black/10 hover:border-black/20 backdrop-blur-md shadow-sm',
    outline:
      'border-2 border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] hover:bg-[var(--color-accent-gold)] hover:text-white',
    glass:
      'bg-white/80 hover:bg-white text-[var(--color-accent-gold)] border border-[var(--color-accent-gold)]/40 backdrop-blur-md shadow-sm',
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
