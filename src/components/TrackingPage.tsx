import React from 'react';
import TrackingForm from './TrackingForm';
import ShipmentDetails from './ShipmentDetails';

const TrackingPage: React.FC = () => {
  const [trackingId, setTrackingId] = React.useState('');

  return (
    <div>
      <TrackingForm setTrackingId={setTrackingId} />
      {trackingId && <ShipmentDetails trackingId={trackingId} />}
    </div>
  );
};

export default TrackingPage;