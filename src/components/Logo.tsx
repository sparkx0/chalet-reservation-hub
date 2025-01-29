import React from "react";

interface LogoProps {
  variant?: 'nav' | 'footer';
}

const Logo = ({ variant = 'nav' }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      {variant === 'nav' ? (
        <img 
          src="/lovable-uploads/65ff957a-a25e-4213-bb13-96bcb25dfdc2.png" 
          alt="Le Chalet du Salève"
          className="h-12 w-auto"
        />
      ) : (
        <img 
          src="/lovable-uploads/47318b36-7269-4485-acf2-02987a711480.png" 
          alt="Le Chalet du Salève"
          className="h-16 w-auto"
        />
      )}
    </div>
  );
};

export default Logo;