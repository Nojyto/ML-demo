import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text transition-colors">
      <header className="text-center">
        <h1 className="text-4xl font-heading mb-4">React</h1>
        <p className="mb-6">Simple template.</p>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-secondary transition-colors"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
    </div>
  );
}

export default App;
