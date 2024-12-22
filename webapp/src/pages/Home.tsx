import { useEffect, useState } from 'react';

function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-text transition-colors">
      <div className="text-center">
        <h1 className="text-4xl font-heading mb-4">React</h1>
        <p className="mb-6">Simple template with Tailwind CSS.</p>
      </div>
    </main>
  );
}

export default Home;
