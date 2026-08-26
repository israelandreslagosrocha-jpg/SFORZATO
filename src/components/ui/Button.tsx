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
  style,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-gold)] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98] overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-5 py-2.5 tracking-wider uppercase font-bold',
    md: 'text-xs sm:text-sm px-6 py-3.5 tracking-widest uppercase font-bold',
    lg: 'text-sm sm:text-base px-8 py-4 tracking-widest uppercase font-bold',
  };

  const variantStyles = {
    primary:
      'bg-[#0A0F1D] text-white hover:bg-[#8C5E0A] hover:text-white border border-[#0A0F1D] hover:border-[#8C5E0A] shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-[#0A0F1D] hover:bg-slate-100 border border-slate-300 shadow-xs',
    outline:
      'bg-transparent text-[#8C5E0A] hover:bg-[#8C5E0A] hover:text-white border-2 border-[#8C5E0A]',
    glass:
      'bg-white/90 text-[#0A0F1D] hover:bg-white border border-slate-300 shadow-xs',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      style={{
        backgroundColor: variant === 'primary' ? '#0A0F1D' : undefined,
        color: variant === 'primary' ? '#FFFFFF' : undefined,
        ...style,
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
