import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text transition-colors">
      <h1 className="text-4xl font-heading mb-4">About Us</h1>
      <p className="text-lg">This is a simple React app styled with Tailwind CSS.</p>
    </div>
  );
};

export default About;
