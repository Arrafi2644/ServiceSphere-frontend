"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

// Testimonial data
const testimonials = [
    {
        id: 1,
        quote: "ServiceSphere transformed how we hire. We found an incredible developer within 24 hours who helped us launch our MVP ahead of schedule.",
        name: "Jennifer Lawrence",
        role: "CEO at TechStart",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
        id: 2,
        quote: "The quality of talent here is unmatched. I've used other platforms, but the freelancers on ServiceSphere are truly professionals.",
        name: "Mark Thompson",
        role: "Marketing Director",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
        id: 3,
        quote: "Secure payments and excellent support make this my go-to platform for all outsourcing needs. Highly recommended!",
        name: "Sarah Williams",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
        id: 4,
        quote: "Outstanding experience from start to finish. The platform's ease of use and quality of professionals exceeded all expectations.",
        name: "David Chen",
        role: "Startup Founder",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
        id: 5,
        quote: "I've completed over 50 projects through ServiceSphere. The reliability and professionalism are unparalleled.",
        name: "Emily Rodriguez",
        role: "Design Lead",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
    }
];

export default function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [currentX, setCurrentX] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const [slidesPerView, setSlidesPerView] = React.useState(3);

    const totalSlides = testimonials.length;
    const maxSlide = Math.max(0, totalSlides - slidesPerView);

    // Handle responsive slides per view
    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setSlidesPerView(1); // mobile
            } else if (width < 1024) {
                setSlidesPerView(2); // tablet
            } else {
                setSlidesPerView(3); // desktop
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset slide if out of bounds
    React.useEffect(() => {
        if (currentSlide > maxSlide) {
            setCurrentSlide(maxSlide);
        }
    }, [maxSlide, currentSlide]);

    const handleDragStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        setCurrentX(clientX);
    };

    const handleDragMove = (clientX: number) => {
        if (!isDragging) return;
        setCurrentX(clientX);
        setOffset(clientX - startX);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 50;
        if (offset < -threshold && currentSlide < maxSlide) {
            setCurrentSlide(prev => prev + 1);
        } else if (offset > threshold && currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
        setOffset(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        handleDragStart(e.clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        handleDragMove(e.clientX);
    };

    const handleMouseUp = () => {
        handleDragEnd();
    };

    const handleMouseLeave = () => {
        if (isDragging) handleDragEnd();
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        handleDragStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleDragMove(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        handleDragEnd();
    };

    return (
        <div className="w-full bg-linear-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-gray-600">
                        See what our clients have to say about their experience with ServiceSphere.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative">
                    {/* Slides */}
                    <div
                        className="overflow-hidden cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex select-none"
                            style={{
                                transform: `translateX(calc(-${currentSlide * (100 / slidesPerView)}% + ${offset}px))`,
                                transition: isDragging ? 'none' : 'transform 500ms ease-out'
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="shrink-0 px-2 sm:px-4"
                                    style={{
                                        width: `${100 / slidesPerView}%`,
                                        minWidth: `${100 / slidesPerView}%`
                                    }}
                                >
                                    <Card className="h-full bg-white hover:shadow-xl transition-shadow duration-300">
                                        <CardContent className="p-8">
                                            <Quote className="w-12 h-12 text-orange-500 mb-6" />

                                            <blockquote className="text-gray-700 italic mb-8 leading-relaxed">
                                                {testimonial.quote}
                                            </blockquote>

                                            <div className="flex items-center gap-4">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    width={56} // 14 * 4 = 56px
                                                    height={56} // 14 * 4 = 56px
                                                    className="rounded-full object-cover"
                                                />
                                                <div>
                                                    <div className="font-semibold text-gray-900">
                                                        {testimonial.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {testimonial.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}