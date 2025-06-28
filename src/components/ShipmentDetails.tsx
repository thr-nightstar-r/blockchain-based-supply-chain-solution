import React, { useState, useEffect } from 'react';
import { Package, Truck, MapPin, CheckCircle } from 'lucide-react';

interface ShipmentDetailsProps {
  trackingId: string;
}

interface ShipmentData {
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  currentLocation: string;
  updates: Array<{ date: string; time: string; event: string; location: string }>;
}

const ShipmentDetails: React.FC<ShipmentDetailsProps> = ({ trackingId }) => {
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShipmentData = async () => {
      setLoading(true);
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock data generation based on tracking ID
      const mockData: ShipmentData = {
        status: ['In Transit', 'Delivered', 'Processing'][Math.floor(Math.random() * 3)],
        origin: ['New York, NY', 'Los Angeles, CA', 'Chicago, IL'][Math.floor(Math.random() * 3)],
        destination: ['Miami, FL', 'Seattle, WA', 'Houston, TX'][Math.floor(Math.random() * 3)],
        estimatedDelivery: new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        currentLocation: ['Denver, CO', 'St. Louis, MO', 'Atlanta, GA'][Math.floor(Math.random() * 3)],
        updates: [
          {
            date: '2023-04-10',
            time: '08:00',
            event: 'Package picked up',
            location: 'Origin City',
          },
          {
            date: '2023-04-11',
            time: '14:30',
            event: 'Departed sorting facility',
            location: 'Transit City 1',
          },
          {
            date: '2023-04-12',
            time: '10:15',
            event: 'Arrived at distribution center',
            location: 'Transit City 2',
          },
        ],
      };

      setShipmentData(mockData);
      setLoading(false);
    };

    if (trackingId) {
      fetchShipmentData();
    }
  }, [trackingId]);

  if (loading) {
    return <div className="text-center">Loading shipment details...</div>;
  }

  if (!shipmentData) {
    return <div className="text-center">No shipment data found for the given tracking number.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
      <p className="text-gray-600 mb-4">Tracking Number: {trackingId}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Shipment Information</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <Package className="mr-2 text-blue-500" /> Status: {shipmentData.status}
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2 text-green-500" /> Origin: {shipmentData.origin}
            </p>
            <p className="flex items-center">
              <MapPin className="mr-2 text-red-500" /> Destination: {shipmentData.destination}
            </p>
            <p className="flex items-center">
              <Truck className="mr-2 text-yellow-500" /> Current Location: {shipmentData.currentLocation}
            </p>
            <p className="flex items-center">
              <CheckCircle className="mr-2 text-purple-500" /> Estimated Delivery: {shipmentData.estimatedDelivery}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Tracking Updates</h3>
          <div className="space-y-4">
            {shipmentData.updates.map((update, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-4">
                <p className="font-semibold">{update.date} - {update.time}</p>
                <p>{update.event}</p>
                <p className="text-sm text-gray-600">{update.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;