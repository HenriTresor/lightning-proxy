import Image from "next/image";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
import Pricing from "./components/landing/Pricing";
import LearnMore from "./components/landing/LearnMore";
import Faq from "./components/landing/Faq";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <div className="w-full h-auto">
        <Header />
     <div className="md:pl-24 md:pr-24 p-0">
        <Hero />
        <About />
        <Pricing />
        <LearnMore />
        <Faq />
     </div>
      <Footer/>
    </div>
  )
}
