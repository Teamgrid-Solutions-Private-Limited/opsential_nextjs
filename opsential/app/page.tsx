import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Product from "@/components/Product";
import GetStarted from "@/components/GetStarted";
import TrustSecurity from "@/components/TrustSecurity";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";
import { getData } from "@/lib/getData";
export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Navbar />
      <Hero data={data?.heroData} />
      <Features data={data?.featuresData} />
      <Product data={data?.productData} />
      <GetStarted data={data?.getStartedData} />
      <TrustSecurity data={data?.trustSecurityData} />
      <EarlyAccess data={data?.earlyAccessData} />
      <Footer />
    </main>
  );
}
