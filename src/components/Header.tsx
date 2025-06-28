import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Truck, Search, BarChart, Database, LogOut } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Truck className="mr-2" /> BlockChain Supply
          </Link>
          <nav>
            <ul className="flex space-x-4">
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/dashboard" className="flex items-center hover:text-blue-200">
                      <BarChart className="mr-1" /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/track" className="flex items-center hover:text-blue-200">
                      <Search className="mr-1" /> Track Shipment
                    </Link>
                  </li>
                  <li>
                    <Link to="/explorer" className="flex items-center hover:text-blue-200">
                      <Database className="mr-1" /> Blockchain Explorer
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="flex items-center hover:text-blue-200">
                      <LogOut className="mr-1" /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="flex items-center hover:text-blue-200">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;