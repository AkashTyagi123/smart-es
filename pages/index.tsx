import Features from "../components/feature";
import Pricing from "../components/pricing";
import Stats from "../components/stats";
import Testimonial from "../components/testimonials";
import Footer from "../components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <Testimonial />

      <Footer />
    </>
  );
}
