import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container bg-[#121212] ">
      <Navbar />
      <div className="container t-24 py-4 px-12 mx-auto">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
