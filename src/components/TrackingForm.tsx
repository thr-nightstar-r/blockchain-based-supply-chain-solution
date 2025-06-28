import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface TrackingFormProps {
  setTrackingId: (id: string) => void;
}

const TrackingForm: React.FC<TrackingFormProps> = ({ setTrackingId }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackingId(inputValue);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">Track Your Shipment</h2>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter tracking number"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
        >
          <Search className="mr-2" /> Track
        </button>
      </form>
    </div>
  );
};

export default TrackingForm;