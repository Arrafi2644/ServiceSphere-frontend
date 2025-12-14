"use client"
import { Star, MapPin, Verified } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const freelancers = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
    reviews: 142,
    rate: 65,
    location: 'United States',
    verified: true,
    skills: ['Figma', 'Sketch', 'Adobe XD'],
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Full Stack Developer',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviews: 98,
    rate: 85,
    location: 'Canada',
    verified: true,
    skills: ['React', 'Node.js', 'Python'],
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Digital Marketer',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    rating: 4.8,
    reviews: 210,
    rate: 45,
    location: 'United Kingdom',
    verified: true,
    skills: ['SEO', 'Google Ads', 'Analytics'],
  },
  {
    id: 4,
    name: 'Maria Garcia',
    role: 'Content Writer',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
    reviews: 76,
    rate: 55,
    location: 'Spain',
    verified: true,
    skills: ['Copywriting', 'SEO Writing', 'Blogs'],
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Video Editor',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 4.9,
    reviews: 134,
    rate: 70,
    location: 'South Korea',
    verified: true,
    skills: ['Premiere Pro', 'After Effects', 'DaVinci'],
  },
  {
    id: 6,
    name: 'Emma Davis',
    role: 'Graphic Designer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5.0,
    reviews: 189,
    rate: 60,
    location: 'Australia',
    verified: true,
    skills: ['Illustrator', 'Photoshop', 'Branding'],
  },
]
export function TopFreelancers() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 px-4 md:px-6 w-full">
      <div className="container mx-auto ">
        <div className="text-center mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              Top Talent
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Meet Our Top Rated Freelancers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Work with verified professionals who deliver exceptional results
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancers.map((freelancer, index) => (
            <motion.div
              key={freelancer.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl hover:border-orange-100 transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                  <Image 
                    src={freelancer.avatar}
                    alt={freelancer.name}
                    width={16}
                    height={16}
                    className="rounded-full object-cover border-2 border-slate-100"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">
                      {freelancer.name}
                    </h3>
                    {freelancer.verified && (
                      <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    {freelancer.role}
                  </p>
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span className="text-slate-500">
                      {freelancer.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                  <span className="font-bold text-slate-900">
                    {freelancer.rating}
                  </span>
                  <span className="text-sm text-slate-500">
                    ({freelancer.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-full border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Starting at</p>
                  <p className="text-xl font-bold text-slate-900">
                    ${freelancer.rate}
                    <span className="text-sm font-normal text-slate-500">
                      /hr
                    </span>
                  </p>
                </div>
                <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-lg shadow-orange-500/25">
                  Hire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
            View All Freelancers →
          </button>
        </div>
      </div>
    </section>
  )
}
