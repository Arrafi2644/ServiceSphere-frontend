import React from 'react';
import { Shield, Award, Clock, UserCheck } from 'lucide-react';

// TypeScript Interfaces
interface Feature {
  id: number | string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
  image?: string;
  imageAlt?: string;
  imageBadge?: string;
  imageBadgeSubtext?: string;
}

// Reusable Feature Card Component
const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
        <div className="text-orange-500">
          {feature.icon}
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-2 text-base md:text-lg">
          {feature.title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

// Main WhyChooseUs Component
export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  badge = "WHY CHOOSE US",
  title = "We Are The Best Choice For Your Business",
  subtitle = "ServiceSpot provides a secure, reliable, and efficient platform to connect with top talent worldwide. We guarantee quality and satisfaction with every service.",
  features,
  image = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  imageAlt = "Team collaboration",
  imageBadge = "100% Secure",
  imageBadgeSubtext = "Payment Protection"
}) => {
  const defaultFeatures: Feature[] = [
    {
      id: 1,
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Your transactions are protected with bank-level security. We ensure safe and secure payment processing for every transaction."
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "We stand behind the quality of work delivered. If you're not satisfied, we'll make it right or provide a full refund."
    },
    {
      id: 3,
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or concerns."
    },
    {
      id: 4,
      icon: <UserCheck className="w-6 h-6" />,
      title: "Verified Professionals",
      description: "We verify the identity and skills of our freelancers so you can hire with confidence and peace of mind."
    }
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <div className="w-full px-4 py-12 md:py-20 bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="text-orange-500 text-xs md:text-sm font-bold tracking-wider uppercase">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-10 leading-relaxed">
              {subtitle}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {displayFeatures.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover"
              />
              
              {/* Image Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm md:text-base">
                    {imageBadge}
                  </div>
                  <div className="text-gray-600 text-xs md:text-sm">
                    {imageBadgeSubtext}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
