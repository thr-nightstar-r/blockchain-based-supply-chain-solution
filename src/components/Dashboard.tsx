import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, Clock, CheckCircle, Package, Database, Shield } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState({
    totalShipments: 0,
    onTimeDeliveries: 0,
    averageTransitTime: 0,
    efficiencyIncrease: 0,
    blockchainTransactions: 0,
    dataIntegrity: 0,
    monthlyShipments: Array(12).fill(0),
  });

  useEffect(() => {
    const fetchData = () => {
      const data = {
        totalShipments: Math.floor(Math.random() * 10000) + 1000,
        onTimeDeliveries: (Math.random() * (100 - 90) + 90).toFixed(1),
        averageTransitTime: (Math.random() * (5 - 2) + 2).toFixed(1),
        efficiencyIncrease: (Math.random() * 20).toFixed(1),
        blockchainTransactions: Math.floor(Math.random() * 1000000) + 100000,
        dataIntegrity: (Math.random() * (100 - 99) + 99).toFixed(2),
        monthlyShipments: Array(12).fill(0).map(() => Math.floor(Math.random() * 1000) + 100),
      };
      setDashboardData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Supply Chain Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <DashboardCard
          title="Total Shipments"
          value={dashboardData.totalShipments.toLocaleString()}
          icon={<Package className="text-blue-500" />}
        />
        <DashboardCard
          title="On-Time Deliveries"
          value={`${dashboardData.onTimeDeliveries}%`}
          icon={<CheckCircle className="text-green-500" />}
        />
        <DashboardCard
          title="Average Transit Time"
          value={`${dashboardData.averageTransitTime} days`}
          icon={<Clock className="text-yellow-500" />}
        />
        <DashboardCard
          title="Efficiency Increase"
          value={`+${dashboardData.efficiencyIncrease}%`}
          icon={<TrendingUp className="text-purple-500" />}
        />
        <DashboardCard
          title="Blockchain Transactions"
          value={dashboardData.blockchainTransactions.toLocaleString()}
          icon={<Database className="text-indigo-500" />}
        />
        <DashboardCard
          title="Data Integrity"
          value={`${dashboardData.dataIntegrity}%`}
          icon={<Shield className="text-red-500" />}
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Monthly Shipment Volume</h3>
        <div className="h-64 flex items-end space-x-2">
          {dashboardData.monthlyShipments.map((value, index) => (
            <div
              key={index}
              className="bg-blue-500 w-1/12"
              style={{ height: `${(value / Math.max(...dashboardData.monthlyShipments)) * 100}%` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;