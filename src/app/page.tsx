import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Screenshots from "@/components/Screenshots";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050506]">
      {/* Multi-layer background system */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at top center, #0a0a0f 0%, #050506 50%, #020203 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Screenshots />
        <SocialProof />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
