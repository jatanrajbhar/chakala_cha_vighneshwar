import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GaneshUtsav from "@/components/GaneshUtsav";
import Karyakarta from "@/components/Karyakarta";
import Contact from "@/components/Contact";
import Donation from "@/components/Donation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <GaneshUtsav />
      <Karyakarta />
      <Contact />
      <Donation />
      <Footer />
    </main>
  );
};

export default Index;
