import React from 'react';

interface ContainerProps{
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({children, className = ''}) => {
  return (
    <div className={`max-w-[80rem] mx-auto px-5 md:px-10 lg:px-15 ${className}`}>
        {children}
    </div>
  );
};

export default Container;
