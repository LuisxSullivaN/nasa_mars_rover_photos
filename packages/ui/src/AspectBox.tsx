import React from 'react';
import clsx from 'clsx';

type AspectBoxProps = {
  children?: React.ReactNode;
  ratio: 'square' | 'wide';
};

export const AspectBox = ({ children, ratio }: AspectBoxProps) => (
  <div
    className={clsx(
      'relative w-full',
      ratio === 'square' && 'pb-[100%]',
      ratio === 'wide' && 'pb-[56.25%]'
    )}
  >
    <div className="absolute top-0 left-0 w-full h-full max-w-">{children}</div>
  </div>
);
