import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 bg-primary text-background shadow-md z-10">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-secondary transition-colors">ML Showcase</Link>
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
        <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
        <Link to="/projects" className="hover:text-secondary transition-colors">All Projects</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
