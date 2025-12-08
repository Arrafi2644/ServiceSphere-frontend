import React from 'react';
import { Palette, Code, PenTool, Video, Music, TrendingUp, Briefcase, Database, LucideIcon } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

// Types
export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  stats: string;
  color: string;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  stats: string;
  color: string;
}

interface PopularServicesProps {
  title?: string;
  subtitle?: string;
  servicesList?: Service[];
}

const services: Service[] = [
  {
    id: 1,
    icon: Palette,
    title: 'Graphics & Design',
    stats: '12k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 2,
    icon: Code,
    title: 'Development & IT',
    stats: '8k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 3,
    icon: PenTool,
    title: 'Writing & Translation',
    stats: '15k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 4,
    icon: Video,
    title: 'Video & Animation',
    stats: '4k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 5,
    icon: Music,
    title: 'Music & Audio',
    stats: '3k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Digital Marketing',
    stats: '6k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 7,
    icon: Briefcase,
    title: 'Business',
    stats: '9k+ Jobs',
    color: 'text-orange-500'
  },
  {
    id: 8,
    icon: Database,
    title: 'Data Entry',
    stats: '5k+ Jobs',
    color: 'text-orange-500'
  }
];

export const PopularServices: React.FC<PopularServicesProps> = ({ 
  title = "Popular Services",
  subtitle = "Explore the most popular categories and find the perfect expert for your needs.",
  servicesList = services 
}) => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              stats={service.stats}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};