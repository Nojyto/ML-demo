import { useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text transition-colors">
      <header className="text-center">
        <h1 className="text-4xl font-heading mb-4">React</h1>
        <p className="mb-6">Simple template with Tailwind CSS.</p>
        <button
          onClick={toggleDarkMode}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-background rounded-lg hover:bg-secondary transition-colors"
        >
          {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          <span>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</span>
        </button>
      </header>
    </div>
  );
}

export default Home;
