import type { ReactNode } from "react";

type ButtonProps = {
  label?: string;
  icon?: ReactNode;
  tooltip?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  label,
  icon,
  tooltip,
  onClick,
  loading = false,
  disabled = false,
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      title={tooltip}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg
        transition font-medium
        bg-blue-600 hover:bg-blue-700
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}

      {!loading && icon && <span className="text-lg">{icon}</span>}

      {label && <span>{label}</span>}
    </button>
  );
}