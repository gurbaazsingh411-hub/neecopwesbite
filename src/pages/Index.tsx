import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import { Users, TrendingUp, Globe, Shield, Zap, Target, Lightbulb, ArrowRight, Quote, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Highlight from "@/components/Highlight";

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const initiatives = [
  { slug: "ncr-energy", title: "NCR Energy Research Program", desc: "Data-driven energy policy research launched by the Ministry of Power to steer India's sustainable ecosystem.", cta: "Explore Our Work" },
  { slug: "india-europe-dialogue", title: "India Europe Economic Dialogue", desc: "Bridging academic research and international policy, focusing on Green Energy, AI, Semiconductors, and Trade connectivity.", cta: "Read More" },
  { slug: "delhi-startup-policy", title: "Delhi Start-up Policy", desc: "Co-creating an inclusive startup ecosystem through high-level consultative roundtables and policy dialogues.", cta: "Learn More" },
];

const slideshowImages = [
  "/assets/media/hero-slideshow/slide-1.jpg",
  "/assets/media/hero-slideshow/slide-2.jpg",
  "/assets/media/hero-slideshow/slide-3.jpg",
  "/assets/media/hero-slideshow/slide-4.jpg",
  "/assets/media/hero-slideshow/slide-6.jpg",
  "/assets/media/hero-slideshow/slide-7.jpg",
];


const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] pt-[50vh] pb-16 md:pb-20 overflow-hidden bg-black flex flex-col items-center">
        <div className="absolute inset-0">
          <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 transition-opacity"
            >
              <img 
                src={slideshowImages[currentSlide]} 
                alt="Institutional Impact" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
          <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-24 h-1 bg-secondary mx-auto mb-4 origin-center"
            />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-4 tracking-tight uppercase">
              From <span className="text-secondary italic">Field</span> <br />
              to <Highlight>Framework</Highlight>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
              Bridging academic rigor with strategic insights to empower India's energy efficiency and startup ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white hover:text-navy transition-all duration-300 text-base px-10 rounded-full h-14 font-bold shadow-xl shadow-secondary/20" asChild>
                <Link to="/initiatives" className="gap-2">
                  <BookOpen className="h-5 w-5" /> Explore Research
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300 bg-transparent text-base px-10 rounded-full h-14 font-bold" asChild>
                <Link to="/contact">Contact Our Experts</Link>
              </Button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Initiatives */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Driving Impact at Scale</h2>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
        >
          {initiatives.map((item) => (
            <motion.div key={item.title} variants={fadeUpItem} className="premium-card bg-card rounded-xl p-8 shadow-card border border-border">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
              <Button variant="link" className="p-0 text-secondary gap-1" asChild>
                <Link to={`/initiatives/${item.slug}`}>{item.cta} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">About Neecop</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Building bridges in India's innovation landscape
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Neecop is a <Highlight>research</Highlight>-driven organization dedicated to energy <Highlight>policy</Highlight>, startup ecosystem analysis, and driving systemic change across India through evidence-based insights.
            </p>
            <Button variant="outline" asChild>
              <Link to="/about" className="gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                { num: "250+", label: "villages/wards surveyed" },
                { num: "5,000+", label: "stakeholders consulted" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-bold text-secondary">{stat.num}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>


      {/* Final CTA */}
      <section className="relative bg-navy py-24 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 bg-secondary mx-auto mb-10" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
              Driving India's <Highlight>Innovation</Highlight><br />through <Highlight>Policy Research</Highlight>
            </h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Collaborate with Neecop to build a data-driven future for India's economy through institutional partnerships and large-scale field evidence.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white hover:text-navy transition-all duration-300 text-base px-10 rounded-full h-14 font-bold h-14" asChild>
                <Link to="/initiatives">See Our Work</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-all h-14 duration-300 bg-transparent text-base px-10 rounded-full font-bold" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neecop Scoop Section */}
      <SectionWrapper className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">The Neecop Scoop</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights on the forces shaping India’s economic, business, and tech landscape, curated from our latest policy research and LinkedIn updates.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Energy Future", highlight: "Ministry of Power approves ₹3,600Cr for NCR infrastructure upgrades and smart grid expansion.", id: "energy-baseline" },
            { title: "Fostering Innovation", highlight: "Draft Delhi Startup Policy 2025 proposes ₹200Cr VC fund to support 5,000 startups by 2035.", id: "startup-policy" },
            { title: "Global Dialogues", highlight: "New Strategic EU-India Agenda 2025 targets FTA conclusion and clean energy partnerships.", id: "india-europe-strategic-agenda" }
          ].map((news, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-heading font-bold text-primary mb-3">🔹 {news.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{news.highlight}</p>
              <Button variant="link" size="sm" className="p-0 text-secondary" asChild>
                <Link to={`/news/${news.id}`}>Read More <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Index;
