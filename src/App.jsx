import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ActivityFeed from './components/ActivityFeed';
import BinaryTree from './components/BinaryTree';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <div className="container mx-auto px-4 py-8">
            <ActivityFeed />
            <BinaryTree />
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
