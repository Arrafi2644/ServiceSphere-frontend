import { Hero } from "@/components/modules/home/Hero";
import { HowItWorks } from "@/components/modules/home/HowItWorks";
import { PopularServices } from "@/components/modules/home/PopularServices";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero title={"Hire Expert"} subtitle={"World's largest freelance marketplace. Millions of people use ServiceSphere to turn their ideas into reality."} />
      <PopularServices />
      <HowItWorks />
    </div>
  );
}
