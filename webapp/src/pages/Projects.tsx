import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <main className="min-h-screen bg-background text-text pt-20 px-8">
      <h1 className="text-4xl font-heading mb-6">All Projects</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/projects/sentiment-analysis" className="text-xl text-primary hover:underline">Sentiment Analysis</Link>
        </li>
        <li>
          <Link to="#" className="text-xl text-secondary">Coming Soon</Link>
        </li>
      </ul>
    </main>
  );
};

export default Projects;
