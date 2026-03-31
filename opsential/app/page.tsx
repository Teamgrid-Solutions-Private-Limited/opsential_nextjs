
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Product from "@/components/Product";
import GetStarted from "@/components/GetStarted"
import TrustSecurity from "@/components/TrustSecurity";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <GetStarted />
      <TrustSecurity />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
