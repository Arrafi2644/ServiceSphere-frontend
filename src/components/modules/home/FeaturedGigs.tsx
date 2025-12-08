import React from 'react';
import { Star, Heart, ArrowRight } from 'lucide-react';
import { GigCard } from '../shared/GigCard';

// TypeScript Interfaces
interface Freelancer {
  name: string;
  avatar: string;
}

interface Gig {
  id: number | string;
  title: string;
  image: string;
  badge?: string;
  freelancer: Freelancer;
  rating: number;
  reviews: number;
  price: number;
}

export interface GigCardProps {
  gig: Gig;
}

interface FeaturedGigsProps {
  gigs: Gig[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
  onViewAll?: () => void;
}

// Main FeaturedGigs Component
export const FeaturedGigs: React.FC<FeaturedGigsProps> = ({  
  title = "Featured Gigs",
  subtitle = "Hand-picked services from our top-rated freelancers.",
  showViewAll = true,
  onViewAll
}) => {
const gigs: Gig[] = [
    {
      id: 1,
      title: "I will design a modern minimalist logo for your business",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
      badge: "Design",
      freelancer: {
        name: "Sarah Jenkins",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      rating: 4.9,
      reviews: 128,
      price: 45
    },
    {
      id: 2,
      title: "I will build a responsive React website with Tailwind",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      badge: "Development",
      freelancer: {
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=12"
      },
      rating: 5.0,
      reviews: 64,
      price: 120
    },
    {
      id: 3,
      title: "I will write SEO optimized content for your blog",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      badge: "Writing",
      freelancer: {
        name: "Emma Davis",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      rating: 4.8,
      reviews: 215,
      price: 30
    },
    {
      id: 4,
      title: "I will create a professional explainer video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      badge: "Video",
      freelancer: {
        name: "David Wilson",
        avatar: "https://i.pravatar.cc/150?img=8"
      },
      rating: 4.8,
      reviews: 92,
      price: 85
    },
    {
      id: 5,
      title: "I will manage your social media accounts daily",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      badge: "Marketing",
      freelancer: {
        name: "Jessica Lee",
        avatar: "https://i.pravatar.cc/150?img=9"
      },
      rating: 4.7,
      reviews: 156,
      price: 150
    },
    {
      id: 6,
      title: "I will develop a custom mobile application",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      badge: "Mobile",
      freelancer: {
        name: "Robert Taylor",
        avatar: "https://i.pravatar.cc/150?img=13"
      },
      rating: 5.0,
      reviews: 78,
      price: 350
    }
  ];


  return (
    <div className="w-full px-4 py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              {subtitle}
            </p>
          </div>
          {showViewAll && (
            <button 
              onClick={onViewAll}
              className="flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group"
            >
              <span className="hidden sm:inline">View All Gigs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((gig) => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};
