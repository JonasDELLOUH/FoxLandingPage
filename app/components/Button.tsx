import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    theme?: 'primary' | 'secondary';
    className?: string;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({children, theme, className, href}) => {
    const baseClasses = "text-white hover:text-white";

    const themeClasses = () => {
        switch (theme) {
            case 'primary':
                return "bg-p-3 hover:bg-p-2";
            case 'secondary':
                return "bg-n-7 hover:bg-p-3";
            default:
                return "";
        }
    }

    const renderButton = () => {
        return (
            <button className={`button py-3 px-3
             lg:py-4 
             lg:px-6 rounded-lg  ${themeClasses()} ${baseClasses} ${className}`}>
                {children}
            </button>
        )
    }

    const renderLink = () => {
       return (
           <a
               href={href}
               className={`button inline-block py-3 px-3 lg:py-6 lg:px-6 no-underline rounded-lg ${themeClasses()} ${baseClasses} ${className}`}
           >
               {children}
           </a>
       );
    }

    return href ? renderLink() : renderButton();
};

export default Button;
