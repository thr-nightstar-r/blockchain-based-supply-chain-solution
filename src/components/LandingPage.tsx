import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, TrendingUp } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to BlockChain Supply</h1>
        <p className="text-xl mb-8">Revolutionizing supply chain management with blockchain technology</p>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Shield className="w-12 h-12 text-blue-500" />}
          title="Secure"
          description="Immutable blockchain records ensure data integrity and security"
        />
        <FeatureCard
          icon={<Truck className="w-12 h-12 text-green-500" />}
          title="Efficient"
          description="Streamlined processes for faster and more efficient shipments"
        />
        <FeatureCard
          icon={<Clock className="w-12 h-12 text-yellow-500" />}
          title="Real-time Tracking"
          description="Monitor your shipments in real-time with precise updates"
        />
        <FeatureCard
          icon={<TrendingUp className="w-12 h-12 text-purple-500" />}
          title="Analytics"
          description="Gain valuable insights with advanced supply chain analytics"
        />
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your supply chain?</h2>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandingPage;