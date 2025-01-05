"use client";

import { LegacyRef, Ref, RefObject } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
  loading?: boolean;
  small?: boolean;
  textColor?: string;
  custom?: string;
  className?: string;
  icon?: IconType;
  ref?: LegacyRef<HTMLButtonElement>;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  primary,
  secondary,
  accent,
  outline,
  loading,
  small = false,
  custom,
  icon: Icon,
  textColor = "white",
  className,
  onClick,
  ref,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ cursor: "pointer" }}
      disabled={disabled}
      className={`btn  text-${textColor} 
        ${primary ? "btn-primary" : ""}  
        ${secondary ? "btn-secondary" : ""}
        ${accent ? "btn-accent" : ""}
        ${outline ? "btn-outline" : ""} 
        ${disabled ? "btn-disabled" : ""}
        ${disabled ? "btn-disabled" : ""}
        ${small ? "btn-sm" : ""} 
        ${className ? className : ""}
        `}
      {...(ref ? { ref } : {})}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;

// disabled:opacity-70
// disabled:cursor-not-allowed
// rounded-md
// hover:opacity-80
// transition
// w-full
// border-slate-700
// flex
// items-center
// justify-center
// gap-2
// ${outline ? 'bg-white' : 'bg-slate-700'}
// ${outline ? 'text-slate-700' : 'text-white'}
// ${small ? 'text-sm font-light' : 'text-md font-semibold'}
// ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'}
// ${custom ? custom : ''}
