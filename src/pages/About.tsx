import SectionWrapper from "@/components/SectionWrapper";
import { Shield, Target, Users, BookOpen, Globe, Award, ChevronRight, Eye, Heart } from "lucide-react";
import Highlight from "@/components/Highlight";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-12 h-1 bg-secondary mb-6" />
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Advancing <Highlight>Policy Research</Highlight> for India's Growth
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed font-light">
            Neecop is a specialized research institution focused on <Highlight>Public Policy</Highlight>, energy efficiency, and innovation ecosystems.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Strengthening India's <Highlight>Governance</Highlight>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Neecop Consultants Pvt. Ltd. is a hybrid policy–strategy institution operating at the intersection of <Highlight>governance</Highlight> reform,
            <Highlight>policy research</Highlight>, and international <Highlight>economic dialogue</Highlight>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We combine academic <Highlight>research</Highlight> rigor with large-scale field survey execution capability and institutional strategy advisory to support evidence-based decision-making across public systems and emerging sectors.
            Currently operating across Delhi–NCR and expanding toward pan-India engagements, Neecop builds structured platforms that translate research into reform.
          </p>

          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Our Strategic Domains</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Governance & Infrastructure Policy",
                desc: "District-level diagnostics, regulatory assessments, and large-scale primary field research.",
                category: "Policy Roundtables"
              },
              {
                title: "Startup & Innovation Ecosystem Policy", 
                desc: "State-level startup ecosystem analysis, reform benchmarking, and consultation frameworks.",
                category: "Startup Summit"
              },
              { 
                title: "International Economic & Policy Dialogue", 
                desc: "Structured academic–policy platforms for comparative research and international engagement.",
                category: "Global Dialogues"
              }
            ].map((domain, idx) => (
              <Link 
                to={`/media?category=${encodeURIComponent(domain.category)}`}
                key={idx} 
                className="premium-card p-6 bg-card rounded-xl border border-border shadow-sm group"
              >
                <h4 className="font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{domain.title}</h4>
                <p className="text-sm text-muted-foreground">{domain.desc}</p>
              </Link>
            ))}
          </div>

          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Our Approach</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-secondary/5 rounded-2xl border border-secondary/20 font-heading font-bold text-secondary uppercase tracking-wider text-sm md:text-base">
            <span>Field Evidence</span>
            <span className="text-muted-foreground">→</span>
            <span>Institutional Consultation</span>
            <span className="text-muted-foreground">→</span>
            <span>Policy Structuring</span>
            <span className="text-muted-foreground">→</span>
            <span>Reform Roadmapping</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/50">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide evidence-based policy research that empowers decision-makers to build a sustainable and innovative India." },
            { icon: Eye, title: "Our Vision", desc: "To become India's leading think-tank for energy policy and innovation ecosystem analysis by 2030." },
            { icon: Heart, title: "Our Values", desc: "Rigorous research, policy impact, transparency, and commitment to sustainable growth." },
          ].map((item) => (
            <div key={item.title} className="premium-card bg-card rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
