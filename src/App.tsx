import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import TrackingPage from './components/TrackingPage';
import BlockchainExplorer from './components/BlockchainExplorer';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/track"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <TrackingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/explorer"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <BlockchainExplorer />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;