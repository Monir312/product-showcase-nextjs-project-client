import Banner from "@/components/sections/Banner";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import PopularItems from "@/components/sections/PopularItems";
import Testimonial from "@/components/sections/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PopularItems />
      <Banner />
      <Features />
      <Testimonial />

    </div>
  );
}
