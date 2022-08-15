import React from 'react';
import { ChevronLeft, ChevronRight } from './Icon';

type CarouselProps = {
  children?: React.ReactNode;
  activeIndex?: number;
};

export const Carousel = ({ children, activeIndex }: CarouselProps) => {
  const [index, setIndex] = React.useState(activeIndex || 0);
  const childrenArray = React.Children.toArray(children);
  const childrenLength = childrenArray.length;
  const child = childrenArray[index];

  const handleNext = () => {
    setIndex((index) => (index + 1) % childrenLength);
  };
  const handlePrevious = () =>
    setIndex((index) => {
      const imageIndex = index - 1;
      return imageIndex < 0 ? childrenLength - 1 : imageIndex;
    });

  return (
    <div className="h-full flex items-center justify-between pt-6">
      <button onClick={handlePrevious}>
        <ChevronLeft fill="white" width={28} />
      </button>
      <div className="w-[500px] mx-2">{child}</div>
      <button onClick={handleNext}>
        <ChevronRight fill="white" width={28} />
      </button>
    </div>
  );
};
