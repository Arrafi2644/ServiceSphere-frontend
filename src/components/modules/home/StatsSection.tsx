"use client"
import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Users, Award, Globe } from 'lucide-react'
const stats = [
  {
    icon: Briefcase,
    value: 2000000,
    suffix: '+',
    label: 'Projects Completed',
    color: 'orange',
  },
  {
    icon: Users,
    value: 500000,
    suffix: '+',
    label: 'Registered Freelancers',
    color: 'blue',
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    color: 'green',
  },
  {
    icon: Globe,
    value: 150,
    suffix: '+',
    label: 'Countries Worldwide',
    color: 'purple',
  },
]
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
  })
  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
export function StatsSection() {
  const colorClasses = {
    orange: 'bg-orange-100 text-orange-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
  }
  return (
    <section className="py-20 md:py-28 bg-linear-to-br w-full from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Trusted By Millions Worldwide
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join the worlds largest freelance marketplace and achieve your
              goals
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
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
              className="text-center"
            >
              <div
                className={`w-16 h-16 ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
