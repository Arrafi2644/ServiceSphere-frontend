import { CTASection } from "@/components/modules/home/CTASection";
import { FeaturedGigs } from "@/components/modules/home/FeaturedGigs";
import { Hero } from "@/components/modules/home/Hero";
import { HowItWorks } from "@/components/modules/home/HowItWorks";
import { PopularServices } from "@/components/modules/home/PopularServices";
import { StatsSection } from "@/components/modules/home/StatsSection";
import TestimonialsSection from "@/components/modules/home/Testimonial";
import { TopFreelancers } from "@/components/modules/home/TopRatedFreelancers";
import { WhyChooseUs } from "@/components/modules/home/WhyChooseUs";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero title={"Hire Expert"} subtitle={"World's largest freelance marketplace. Millions of people use ServiceSphere to turn their ideas into reality."} />
      <PopularServices />
      <HowItWorks />
      <FeaturedGigs gigs={[]} />
      <WhyChooseUs />
      <TopFreelancers />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
