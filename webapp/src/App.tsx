import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import SentimentAnalysis from './pages/SentimentAnalysis';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/sentiment-analysis" element={<SentimentAnalysis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
