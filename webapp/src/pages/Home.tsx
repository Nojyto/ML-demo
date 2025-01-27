import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { testMongo, testRedis } from '../services/api';

const Home: React.FC = () => {
  const [pingResponse, setPingResponse] = useState<string | null>(null);

  const handlePing = async () => {
    try {
      const rspRedis = await testRedis();
      const rspMongo = await testMongo();
      setPingResponse(`Redis: ${JSON.stringify(rspRedis)}, Mongo: ${JSON.stringify(rspMongo)}`);
    } catch (error) {
      setPingResponse('Failed to connect to the API.');
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-text transition-colors pt-20">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl font-heading mb-6">Welcome to My ML Showcase</h1>
        <p className="text-lg mb-8">
          Explore my journey in machine learning. From sentiment analysis to advanced deep learning models, this is where I showcase my work.
        </p>
        <Link to="/projects" className="px-6 py-3 bg-primary text-background rounded-lg shadow-lg hover:bg-secondary transition-colors text-lg">
          View All Projects
        </Link>
        <button
          onClick={handlePing}
          className="mt-8 px-6 py-3 bg-primary text-background rounded-lg shadow-lg hover:bg-secondary transition-colors text-lg"
        >
          Test API Connection
        </button>
        {pingResponse && (
          <div className="mt-6 p-4 bg-accent text-background rounded-lg shadow-lg">
            <h2 className="text-2xl font-heading mb-4">Ping Response:</h2>
            <p>{pingResponse}</p>
          </div>
        )}
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-accent text-background rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading mb-4">Sentiment Analysis</h2>
          <p>A text input-output model for sentiment detection.</p>
          <Link to="/projects/sentiment-analysis" className="text-secondary mt-4 block hover:underline">View Project</Link>
        </div>
        <div className="p-6 bg-secondary text-background rounded-lg shadow-lg">
          <h2 className="text-2xl font-heading mb-4">Coming Soon</h2>
          <p>Stay tuned for exciting ML projects.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
