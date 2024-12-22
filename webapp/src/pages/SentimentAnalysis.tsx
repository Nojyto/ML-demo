import React, { useState } from 'react';

const SentimentAnalysis: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);

  const analyzeSentiment = () => {
    // Placeholder logic for analysis
    const mockResponse = input.toLowerCase().includes('happy') ? 'Positive' : 'Negative';
    setOutput(mockResponse);
  };

  return (
    <main className="min-h-screen bg-background text-text pt-20 px-8">
      <h1 className="text-4xl font-heading mb-6">Sentiment Analysis</h1>
      <div className="max-w-lg mx-auto">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 border border-primary rounded-lg mb-4"
          rows={5}
          placeholder="Type your text here..."
        />
        <button
          onClick={analyzeSentiment}
          className="px-6 py-3 bg-primary text-background rounded-lg hover:bg-secondary transition-colors"
        >
          Analyze
        </button>
        {output && (
          <div className="mt-4 p-4 bg-accent text-background rounded-lg">
            Sentiment: <strong>{output}</strong>
          </div>
        )}
      </div>
    </main>
  );
};

export default SentimentAnalysis;
