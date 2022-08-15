import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const FilterIcon = (props: IconProps) => (
  <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M3 4.66667H18V6.33334H3V4.66667Z" />
    <path d="M3 9.66667H18V11.3333H3V9.66667Z" />
    <path d="M3 14.6667H18V16.3333H3V14.6667Z" />
    <circle cx="6.33333" cy="5.5" r="2.08333" />
    <circle cx="14.6663" cy="10.5" r="2.08333" />
    <circle cx="10.5003" cy="15.5" r="2.08333" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4144 14.0002L27.7072 26.293L26.293 27.7072L14.0002 15.4144L1.70733 27.7072L0.293119 26.293L12.5859 14.0002L0.292969 1.70718L1.70718 0.292969L14.0002 12.5859L26.2931 0.292969L27.7073 1.70718L15.4144 14.0002Z"
    />
  </svg>
);

export const ChevronLeft = (props: IconProps) => (
  <svg viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.01952 15L17 3.08058L13.8184 0L-2.36949e-07 15L13.8184 30L17 26.9194L6.01952 15Z"
    />
  </svg>
);
export const ChevronRight = (props: IconProps) => (
  <svg viewBox="0 0 17 30" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9805 15L0 3.08058L3.18161 0L17 15L3.18161 30L0 26.9194L10.9805 15Z"
    />
  </svg>
);
