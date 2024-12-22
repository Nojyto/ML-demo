import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-primary text-background shadow-md">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-secondary transition-colors">MyApp</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
        <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
