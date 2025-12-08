import { Heart, Star } from "lucide-react";
import { GigCardProps } from "../home/FeaturedGigs";
import Image from "next/image";

export const GigCard: React.FC<GigCardProps> = ({ gig }) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {gig.badge && (
                    <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {gig.badge}
                    </span>
                )}
             <button
  className="absolute top-3 right-3 cursor-pointer bg-white rounded-full p-2 
             md:opacity-0 group-hover:opacity-100 transition-all duration-300 
             hover:bg-orange-50 group/fav"
  aria-label="Add to favorites"
>
  <Heart
    className="w-4 h-4 text-gray-600 transition-colors 
               group-hover/fav:text-orange-500 group-hover/fav:fill-orange-500"
  />
</button>

            </div>

            {/* Content */}
            <div className="p-4">
                {/* Freelancer Info */}
                <div className="flex items-center gap-2 mb-3">

                    <Image
                        src={gig.freelancer.avatar}
                        alt={gig.freelancer.name}
                        width={32}     // w-8 = 32px
                        height={32}    // h-8 = 32px
                        className="rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700">
                        {gig.freelancer.name}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-gray-900 font-medium mb-3 line-clamp-2 hover:text-orange-500 cursor-pointer transition-colors">
                    {gig.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-gray-900">
                        {gig.rating.toFixed(1)}
                    </span>
                    <span className="text-sm text-gray-500">({gig.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Starting at</span>
                    <span className="text-lg font-bold text-gray-900">${gig.price}</span>
                </div>
            </div>
        </div>
    );
};