
"use client"
import React from 'react';
import { Search, CheckCircle2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Feature {
  icon?: React.ReactNode;
  text: string;
}

interface Stat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface HeroProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  searchPlaceholder?: string;
  categoryPlaceholder?: string;
  categories?: string[];
  features?: Feature[];
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
  onSearch?: (query: string, category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Hire Expert",
  highlightText = "Freelancers",
  subtitle = "World's largest freelance marketplace. Millions of people use ServiceSphere to turn their ideas into reality.",
  searchPlaceholder = "Search for any service",
  categoryPlaceholder = "Category",
  categories = ["Design", "Development", "Marketing", "Writing", "Video & Animation"],
  features = [
    { text: "Proof of quality" },
    { text: "Safe and secure" },
    { text: "24/7 support" }
  ],
  stats = [
    { value: "500K+", label: "Positive Review" },
    { value: "2M+", label: "Total Freelancer" }
  ],
  imageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  imageAlt = "Team collaboration",
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, selectedCategory);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 max-w-xl">
            {/* Title */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {title}{" "}
                <span className="text-orange-500">{highlightText}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                for Any Job, Online
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>

            {/* Search Bar - Exactly as screenshot */}
            <div className="bg-white rounded-xl shadow-md p-1.5 flex flex-col sm:flex-row gap-2 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-10 md:h-12 lg:h-14 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base bg-transparent placeholder:text-gray-400"
                />
              </div>
              
              <div className="h-full w-px bg-gray-200 hidden sm:block"></div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-40 h-10 !h-10 md:!h-12 lg:!h-14 border-0 focus:ring-0 text-base bg-transparent text-gray-600">
                  <SelectValue placeholder={categoryPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button 
                onClick={handleSearch}
                className="h-10 md:h-12 lg:h-14 w-full sm:w-auto px-8 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-base font-semibold shadow-sm"
              >
                Search
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  {feature.icon || <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />}
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Hidden on md and below */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl shadow-2xl">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full rounded-3xl h-[500px] object-cover"
              />
              
              {/* Top Right Stat - 500K+ */}
              <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 min-w-[140px]">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 leading-tight">{stats[0]?.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{stats[0]?.label}</div>
                </div>
              </div>

              {/* Bottom Left Stat - 2M+ */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 min-w-[140px]">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 leading-tight">{stats[1]?.value}</div>
                  <div className="text-xs text-gray-500 leading-tight">{stats[1]?.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
