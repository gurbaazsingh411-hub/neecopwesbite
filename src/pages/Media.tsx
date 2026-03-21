import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg"; // Using existing hero bg for consistency if needed, or keeping it clean
import Highlight from "@/components/Highlight";

const mediaCategories = [
    "All",
    "Energy",
    "International Dialogue 2026",
    "Startup Summit",
    "Policy Roundtables",
    "International Dialogues"
];
const mediaData = [
    // Energy
    { id: 101, category: "Energy", title: "Power Supply Framework", image: "/assets/media/energy/energy-1.jpg" },
    { id: 102, category: "Energy", title: "NCR Baseline Assessment", image: "/assets/media/energy/energy-2.jpg" },
    { id: 103, category: "Energy", title: "Energy Infrastructure", image: "/assets/media/energy/energy-3.jpg" },
    { id: 104, category: "Energy", title: "Power Sector Consultation", image: "/assets/media/energy/energy-4.jpg" },
    { id: 105, category: "Energy", title: "Sustainable Governance", image: "/assets/media/energy/energy-5.jpg" },

    // International Dialogue 2026
    { id: 201, category: "International Dialogue 2026", title: "Global Cooperation", image: "/assets/media/international-dialogue-2026/dialogue-1.jpg" },
    { id: 202, category: "International Dialogue 2026", title: "Economic Policy Summit", image: "/assets/media/international-dialogue-2026/dialogue-2.jpg" },
    { id: 203, category: "International Dialogue 2026", title: "Multilateral Engagement", image: "/assets/media/international-dialogue-2026/dialogue-3.jpg" },
    { id: 204, category: "International Dialogue 2026", title: "Bilateral Strategy", image: "/assets/media/international-dialogue-2026/dialogue-4.jpg" },
    { id: 205, category: "International Dialogue 2026", title: "Policy Roundtable", image: "/assets/media/international-dialogue-2026/dialogue-5.jpg" },
    { id: 206, category: "International Dialogue 2026", title: "Strategic Deliberation", image: "/assets/media/international-dialogue-2026/dialogue-6.jpg" },
    { id: 207, category: "International Dialogue 2026", title: "Global Research Forum", image: "/assets/media/international-dialogue-2026/dialogue-7.jpg" },
    { id: 208, category: "International Dialogue 2026", title: "Intergovernmental Dialogue", image: "/assets/media/international-dialogue-2026/dialogue-8.jpg" },
    { id: 209, category: "International Dialogue 2026", title: "Resource Planning", image: "/assets/media/international-dialogue-2026/dialogue-9.jpg" },
    { id: 210, category: "International Dialogue 2026", title: "Global Impact Study", image: "/assets/media/international-dialogue-2026/dialogue-10.jpg" },
    { id: 211, category: "International Dialogue 2026", title: "Institutional Partnership", image: "/assets/media/international-dialogue-2026/dialogue-11.jpg" },

    {
        id: 1,
        category: "Startup Summit",
        title: "DSS 2025 Photo",
        image: "/assets/media/startup-summit/DSS 2025 CM Rekha Gupta Photo.jpg"
    },
    {
        id: 2,
        category: "Startup Summit",
        title: "Summit Event 1",
        image: "/assets/media/startup-summit/IMG_8929.jpg"
    },
    {
        id: 3,
        category: "Startup Summit",
        title: "Summit Event 2",
        image: "/assets/media/startup-summit/IMG_8936.jpg"
    },
    {
        id: 4,
        category: "Startup Summit",
        title: "Summit Event 3",
        image: "/assets/media/startup-summit/IMG_8937.jpg"
    },
    {
        id: 5,
        category: "Startup Summit",
        title: "Summit Event 4",
        image: "/assets/media/startup-summit/IMG_8943.jpg"
    },
    {
        id: 6,
        category: "Startup Summit",
        title: "Summit Event 5",
        image: "/assets/media/startup-summit/IMG_8960.jpg"
    },
    {
        id: 7,
        category: "Startup Summit",
        title: "Summit Event 6",
        image: "/assets/media/startup-summit/IMG_9071.jpg"
    },
    {
        id: 8,
        category: "Startup Summit",
        title: "Summit Event 7",
        image: "/assets/media/startup-summit/IMG_9095.jpg"
    },
    {
        id: 9,
        category: "Startup Summit",
        title: "Summit Event 8",
        image: "/assets/media/startup-summit/IMG_9125.jpg"
    },
    {
        id: 10,
        category: "International Dialogues",
        title: "Global Dialogue 1",
        image: "/assets/media/international-dialogues/DSC00070 (1).jpg"
    },
    {
        id: 11,
        category: "International Dialogues",
        title: "Global Dialogue 2",
        image: "/assets/media/international-dialogues/DSC00123 (1).jpg"
    },
    {
        id: 12,
        category: "International Dialogues",
        title: "Policy Discussion 1",
        image: "/assets/media/international-dialogues/DSC02331.jpg"
    },
    {
        id: 13,
        category: "International Dialogues",
        title: "Policy Discussion 2",
        image: "/assets/media/international-dialogues/DSC02332.jpg"
    },
    {
        id: 14,
        category: "International Dialogues",
        title: "International Summit 1",
        image: "/assets/media/international-dialogues/DSC02373.jpg"
    },
    {
        id: 15,
        category: "International Dialogues",
        title: "International Summit 2",
        image: "/assets/media/international-dialogues/DSC02386.jpg"
    },
    {
        id: 16,
        category: "International Dialogues",
        title: "Strategic Meeting 1",
        image: "/assets/media/international-dialogues/DSC02389.jpg"
    },
    {
        id: 17,
        category: "International Dialogues",
        title: "Strategic Meeting 2",
        image: "/assets/media/international-dialogues/DSC02390.jpg"
    },
    {
        id: 18,
        category: "International Dialogues",
        title: "Power Project Dialogue",
        image: "/assets/media/international-dialogues/Global Dialogue Neecop Power Project.jpg"
    },
    {
        id: 19,
        category: "International Dialogues",
        title: "India-Europe Dialogue",
        image: "/assets/media/international-dialogues/India-Europe Economic & Policy Dialogue (1).png"
    },
    {
        id: 23,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 4",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0040.jpg"
    },
    {
        id: 26,
        category: "Policy Roundtables",
        title: "Delhi Startup Roundtable 7",
        image: "/assets/media/delhi-startup-roundtable/IMG-20250909-WA0045.jpg"
    },
    {
        id: 34,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 1",
        image: "/assets/media/general-roundtables/FB_IMG_1772562708340.jpg.jpeg"
    },
    {
        id: 35,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 2",
        image: "/assets/media/general-roundtables/FB_IMG_1772562711614.jpg.jpeg"
    },
    {
        id: 36,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 3",
        image: "/assets/media/general-roundtables/FB_IMG_1772562714475.jpg.jpeg"
    },
    {
        id: 37,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 4",
        image: "/assets/media/general-roundtables/FB_IMG_1772562717622.jpg.jpeg"
    },
    {
        id: 38,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 5",
        image: "/assets/media/general-roundtables/FB_IMG_1772562721221.jpg.jpeg"
    },
    {
        id: 39,
        category: "Policy Roundtables",
        title: "Roundtable Engagement 6",
        image: "/assets/media/general-roundtables/IMG-20250725-WA0029.jpg.jpeg"
    },
    // Roundtable Photos
    { id: 401, category: "Policy Roundtables", title: "Strategic Roundtable", image: "/assets/media/roundtable/roundtable-1.jpg" },
    { id: 402, category: "Policy Roundtables", title: "Policy Consultation", image: "/assets/media/roundtable/roundtable-2.jpg" },
    { id: 403, category: "Policy Roundtables", title: "Institutional Dialogue", image: "/assets/media/roundtable/roundtable-3.jpg" },
    { id: 404, category: "Policy Roundtables", title: "Ecosystem Strategy", image: "/assets/media/roundtable/roundtable-4.jpg" },
    { id: 405, category: "Policy Roundtables", title: "Governance Review", image: "/assets/media/roundtable/roundtable-5.jpg" },
    { id: 406, category: "Policy Roundtables", title: "Research Deliberation", image: "/assets/media/roundtable/roundtable-6.jpg" },
    { id: 407, category: "Policy Roundtables", title: "Stakeholder Engagement", image: "/assets/media/roundtable/roundtable-7.jpg" },
    { id: 408, category: "Policy Roundtables", title: "Policy Roadmap", image: "/assets/media/roundtable/roundtable-8.jpg" },
    { id: 409, category: "Policy Roundtables", title: "Strategic Framework", image: "/assets/media/roundtable/roundtable-9.jpg" },
    { id: 410, category: "Policy Roundtables", title: "Institutional Roundtable", image: "/assets/media/roundtable/roundtable-10.jpg" }
];

const Media = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get("category");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        if (categoryQuery && mediaCategories.includes(categoryQuery)) {
            setSelectedCategory(categoryQuery);
        } else {
            setSelectedCategory("All");
        }
    }, [categoryQuery]);

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        if (cat === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category: cat });
        }
    };

    const filteredMedia = selectedCategory === "All"
        ? mediaData
        : mediaData.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <section className="bg-navy py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="container mx-auto px-4 relative z-10 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="w-12 h-1 bg-secondary mb-6" />
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight uppercase">
                            Media & <Highlight className="italic">Outreach</Highlight>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
                            A visual record of our institutional milestones, policy engagements, and grassroots research across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionWrapper>
                <div className="flex flex-wrap gap-3 mb-16 justify-center">
                    {mediaCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2.5 rounded-full border text-sm font-bold transition-all duration-300 ${selectedCategory === cat
                                ? 'bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/20 scale-105'
                                : 'border-border text-muted-foreground hover:border-secondary/50 hover:text-secondary bg-card'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredMedia.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredMedia.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="premium-card aspect-[4/3] bg-card rounded-3xl overflow-hidden group relative border border-border transition-all shadow-sm"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border">
                        <ImageIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                        <h3 className="text-xl font-heading font-bold text-muted-foreground">No media found</h3>
                        <p className="text-muted-foreground/70">Check back later for updates on this category.</p>
                    </div>
                )}
            </SectionWrapper>
        </div>
    );
};

export default Media;
