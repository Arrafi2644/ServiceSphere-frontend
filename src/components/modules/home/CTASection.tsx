"use client"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
export function CTASection() {
  return (
    <section className="py-24 bg-white w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="bg-slate-900 rounded-3xl overflow-hidden relative px-6 py-16 md:px-16 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-orange-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-lg mb-0">
              Join thousands of businesses and freelancers who are already using
              ServiceSphere to get work done.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2">
              Join Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
