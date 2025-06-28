import React, { useState } from 'react';
import { Search, Database } from 'lucide-react';

const BlockchainExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState<null | {
    blockNumber: number;
    timestamp: string;
    transactionHash: string;
    from: string;
    to: string;
    value: string;
  }>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating blockchain data retrieval
    const mockResult = {
      blockNumber: Math.floor(Math.random() * 1000000),
      timestamp: new Date().toISOString(),
      transactionHash: `0x${Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      from: `0x${Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      to: `0x${Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
      value: `${(Math.random() * 10).toFixed(4)} ETH`,
    };
    setSearchResult(mockResult);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Blockchain Explorer</h2>
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter transaction hash, block number, or address"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
        >
          <Search className="mr-2" /> Search
        </button>
      </form>
      {searchResult && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Database className="mr-2" /> Transaction Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Block Number:</p>
              <p>{searchResult.blockNumber}</p>
            </div>
            <div>
              <p className="font-semibold">Timestamp:</p>
              <p>{searchResult.timestamp}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold">Transaction Hash:</p>
              <p className="break-all">{searchResult.transactionHash}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold">From:</p>
              <p className="break-all">{searchResult.from}</p>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold">To:</p>
              <p className="break-all">{searchResult.to}</p>
            </div>
            <div>
              <p className="font-semibold">Value:</p>
              <p>{searchResult.value}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlockchainExplorer;