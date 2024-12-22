import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 bg-primary text-background text-center shadow-md">
      <h1 className="text-4xl font-heading">Welcome to MyApp</h1>
      <p className="text-lg mt-2">A beautiful React application</p>
    </header>
  );
};

export default Header;
