import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Questions } from "@/components/Questions";
import { Credentials } from "@/components/Credentials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Questions />
      <Credentials />
      <CTA />
      <Footer />
    </>
  );
}
