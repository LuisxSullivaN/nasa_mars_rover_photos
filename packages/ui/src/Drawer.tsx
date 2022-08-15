import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CloseIcon } from './Icon';

type DrawerProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onDismiss?: () => void;
  animation: 'fade' | 'slide';
};

export const Drawer = ({
  children,
  isOpen,
  onDismiss,
  animation,
}: DrawerProps) => {
  const contentRef = React.useRef(null);
  const animations = {
    fade: {
      enterActive: 'animate-[fadeIn_0.3s]',
      exitActive: 'animate-[fadeOut_0.3s]',
    },
    slide: {
      enterActive: 'animate-[slideUp_0.3s]',
      exitActive: 'animate-[slideDown_0.3s]',
    },
  };

  React.useEffect(() => {
    const handleDismiss = (event: KeyboardEvent) => {
      if (onDismiss && event.key === 'Escape') {
        onDismiss();
      }
    };

    window.addEventListener('keydown', handleDismiss);

    return () => window.removeEventListener('keydown', handleDismiss);
  }, []);

  return (
    <>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={animations[animation]}
        onEnter={() => (document.body.style.overflow = 'hidden')}
        onExited={() => (document.body.style.overflow = 'unset')}
        mountOnEnter
        unmountOnExit
      >
        <div
          ref={contentRef}
          className="h-screen w-screen bg-zinc-900 text-white fixed top-0 z-[999] p-6"
        >
          <button
            className="p-4 absolute top-2 right-2"
            onClick={() => onDismiss && onDismiss()}
          >
            <CloseIcon width={28} fill="white" />
          </button>
          {children}
        </div>
      </CSSTransition>
      )
    </>
  );
};
