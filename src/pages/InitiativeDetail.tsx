import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Landmark, Globe, CheckCircle2, BarChart3, Microscope, ImageIcon } from "lucide-react";
import Highlight from "@/components/Highlight";
import ncr1 from "@/assets/ncr/DSC01584.JPG.jpeg";
import ncr2 from "@/assets/ncr/DSC01648.JPG.jpeg";
import ncr3 from "@/assets/ncr/DSC_0346.JPG.jpeg";
import ncr4 from "@/assets/ncr/DSC_0454.JPG.jpeg";
import rt1 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.38.jpeg";
import rt2 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.43.jpeg";
import rt3 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.50.jpeg";
import rt4 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 19.59.55.jpeg";
import rt5 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 20.00.01.jpeg";
import rt6 from "@/assets/roundtable/WhatsApp Image 2026-02-27 at 20.00.05.jpeg";

const initiativeData: Record<string, any> = {
    "ncr-energy": {
        title: "Evaluating Power Supply Across the Districts of NCR",
        heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
        icon: Zap,
        summary: "A large-scale baseline assessment framework integrating household surveys, feeder-level sampling, and stakeholder consultations to support long-term power sector reform.",
        pillars: [
            { title: "Supply Reliability", desc: "Analyzing outage patterns and supply consistency across diverse districts." },
            { title: "Consumer Experience", desc: "Evaluating service delivery, billing, and digital interface adoption." },
            { title: "Infrastructure Performance", desc: "Feeder-level sampling to assess adequacy and technical readiness." },
            { title: "Governance Redressal", desc: "Testing institutional coordination and grievance management systems." }
        ],
        detailedContent: <>In collaboration with Power Foundation of India and Kirori Mal College, Neecop is engaged in one of the most structured primary <Highlight>governance</Highlight> diagnostics at the sub-regional level. The framework covers 5,000+ household <Highlight>surveys</Highlight> and 1,200+ feeder-level samples to generate data-driven <Highlight>insights</Highlight> for Viksit Bharat @2047.</>,
        stats: [
            { label: "Household Surveys", value: "5,000+" },
            { label: "Feeder Samples", value: "1,200+" },
            { label: "Assembly Constituencies", value: "70" },
            { label: "Stakeholder Interviews", value: "350+" }
        ],
        recruitment: [
            "Research Consultants (Analytical Research)",
            "Field Investigators (On-ground Surveys)"
        ],
        galleryLink: "/media?category=Energy"
    },
    "delhi-startup-policy": {
        title: <>Startup & <Highlight>Innovation</Highlight> Ecosystem <Highlight>Policy</Highlight></>,
        heroImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop",
        icon: Landmark,
        summary: "Strengthening state-level innovation architecture through structured policy analysis, reform benchmarking, and multi-stakeholder engagement.",
        pillars: [
            { title: "Regulatory Environment", desc: "Improving ease of compliance and reducing administrative bottlenecks." },
            { title: "Incubation Support", desc: "Strengthening institutional systems for early-stage startup growth." },
            { title: "Funding Access", desc: "Mapping capital flow structures and improving access to seed stage funding." },
            { title: "Market Linkages", desc: "Opening procurement access and industry connections for innovators." }
        ],
        detailedContent: <>Neecop contributed to the development process of the Draft Delhi Startup <Highlight>Policy</Highlight>, aligning it with DPIIT States’ Startup Ecosystem <Highlight>Ranking Framework</Highlight>. Our work ensured that <Highlight>policy design</Highlight> was informed by ground-level entrepreneurial experience and institutional capacity considerations.</>,
        stats: [
            { label: "Stakeholders Engaged", value: "200+" },
            { label: "Reform Areas", value: "6" },
            { label: "Action Points", value: "19" }
        ],
        galleryLink: "/media?category=Startup+Summit"
    },
    "india-europe-dialogue": {
        title: "India–Europe Economic & Policy Dialogue",
        heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
        icon: Globe,
        summary: "A sustained academic–policy platform fostering international engagement on economic governance, fiscal federalism, and institutional reform.",
        pillars: [
            { title: "Umbrella Platform", desc: "Sustained engagement through quarterly thematic roundtables and research." },
            { title: "Thematic Verticals", desc: "Focused series such as the Indo–German Dialogue on Fiscal Federalism." },
            { title: "Fiscal Federalism", desc: "Exploring revenue sharing, vertical balance, and state autonomy." },
            { title: "Cross-border Research", desc: "Facilitating co-authored research and institutional knowledge exchange." }
        ],
        detailedContent: <>Launched in collaboration with Kirori Mal College and Hanns Seidel Foundation, this <Highlight>Dialogue</Highlight> strengthens economic <Highlight>cooperation</Highlight> through scholarly depth and <Highlight>policy relevance</Highlight>. It connects global policy debates with Indian <Highlight>governance</Highlight> priorities in areas like public finance and intergovernmental coordination.</>,
        galleryLink: "/media?category=Global+Dialogues"
    }
};

const InitiativeDetail = () => {
    const { id } = useParams();
    const data = id ? initiativeData[id] : null;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Work not found</h1>
                    <Button asChild><Link to="/initiatives">Back to Our Work</Link></Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Button variant="ghost" className="text-white mb-8 gap-2 hover:bg-white/10" asChild>
                            <Link to="/initiatives"><ArrowLeft className="h-4 w-4" /> Back to Our Work</Link>
                        </Button>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
                            {data.summary}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <SectionWrapper>
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Detailed Narrative */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                            <Microscope className="text-secondary h-8 w-8" /> Executive Summary
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {data.detailedContent}
                        </p>

                        {data.stats && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                                {data.stats.map((stat: any) => (
                                    <div key={stat.label} className="p-4 bg-muted/50 rounded-xl border border-border text-center">
                                        <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {data.recruitment && (
                            <div className="mt-12 p-6 md:p-8 bg-secondary/5 border border-secondary/20 rounded-2xl">
                                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">📢 Opportunities</h2>
                                <p className="text-muted-foreground mb-4 font-medium italic">We will soon be inviting applications for:</p>
                                <ul className="space-y-2">
                                    {data.recruitment.map((role: string) => (
                                        <li key={role} className="flex items-center gap-2 text-foreground font-semibold">
                                            <CheckCircle2 className="h-5 w-5 text-secondary" /> {role}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    Be part of this nation-building journey in collaboration with the Ministry of Power.
                                </p>
                            </div>
                        )}

                        <h2 className="text-3xl font-heading font-bold text-foreground mb-6 mt-16 flex items-center gap-3">
                            <BarChart3 className="text-secondary h-8 w-8" /> Key Research Pillars
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {data.pillars.map((pillar: any) => (
                                <div key={pillar.title} className="p-6 bg-card rounded-xl border border-border shadow-sm">
                                    <h3 className="font-heading font-bold text-foreground mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-secondary" /> {pillar.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {pillar.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-10">
                            <div className="bg-muted rounded-2xl p-8 border border-border">
                                <h3 className="text-xl font-heading font-bold text-foreground mb-4">Collaborate with us</h3>
                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                    Interested in our research data or looking to partner on this work?
                                </p>
                                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                                    <Link to="/contact">Get in Touch</Link>
                                </Button>
                            </div>

                            <div className="p-8 border border-border rounded-2xl">
                                <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">Related News</p>
                                <div className="space-y-4">
                                    {[
                                        { title: "Ministry of Power review of NCR Energy baseline...", path: "/news/energy-baseline" },
                                        { title: "Strategic Roadmap for India-Europe Trade...", path: "/news/india-europe-strategic-agenda" }
                                    ].map((news, idx) => (
                                        <Link
                                            key={idx}
                                            to={news.path}
                                            className="block text-sm font-medium hover:text-secondary cursor-pointer transition-colors"
                                        >
                                            {news.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Image Gallery */}
            {data.gallery && (
                <section className="pb-24 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-3 mb-12">
                            <ImageIcon className="text-secondary h-8 w-8" />
                            <h2 className="text-3xl font-heading font-bold text-foreground italic underline decoration-secondary/30 underline-offset-8">
                                Gallery
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-6">
                            {data.gallery.map((img: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    <img
                                        src={typeof img === 'string' ? img : (img as any).src}
                                        alt={`${data.title} Gallery ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white text-sm font-medium">
                                            {typeof img === 'string' ? `Research Milestone View ${idx + 1}` : (img as any).caption}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {data.galleryLink && (
                <section className="pb-24 pt-12 text-center bg-background">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10 h-14 rounded-full font-bold shadow-xl shadow-secondary/20 transition-all scale-100 hover:scale-105" asChild>
                        <Link to={data.galleryLink}>
                            <ImageIcon className="h-5 w-5 mr-3" /> View Gallery
                        </Link>
                    </Button>
                </section>
            )}
        </div>
    );
};

export default InitiativeDetail;
