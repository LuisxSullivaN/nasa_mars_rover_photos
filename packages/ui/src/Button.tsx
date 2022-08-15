import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary';
  leftIndicator?: JSX.Element;
  onClick?: () => void;
  className?: string;
};

const variants = {
  primary:
    'rounded-lg border border-transparent bg-blue-500 font-medium py-2 px-4',
};

export const Button = ({
  children,
  variant = 'primary',
  leftIndicator,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'text-white text-md',
        variants[variant],
        leftIndicator && 'inline-flex justify-center items-center',
        className
      )}
      onClick={onClick}
    >
      {leftIndicator &&
        React.cloneElement(leftIndicator, { className: 'mr-2' })}
      {children}
    </button>
  );
};
