import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Camera, Image as ImageIcon, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Highlight from "@/components/Highlight";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

const mediaCategories = [
    "All",
    "Field Work",
    "Energy",
    "Startup Summit",
    "Policy Roundtables",
    "Global Dialogues"
];

const mediaData = [
    // Field Work
    { id: 501, category: "Field Work", title: "Field Work 1", image: "/assets/media/field-work/field-work-1.jpg" },
    { id: 502, category: "Field Work", title: "Field Work 2", image: "/assets/media/field-work/field-work-2.jpg" },
    { id: 503, category: "Field Work", title: "Field Work 3", image: "/assets/media/field-work/field-work-3.jpg" },
    { id: 504, category: "Field Work", title: "Field Work 4", image: "/assets/media/field-work/field-work-4.jpg" },
    { id: 505, category: "Field Work", title: "Field Work 5", image: "/assets/media/field-work/field-work-5.jpg" },
    { id: 506, category: "Field Work", title: "Field Work 6", image: "/assets/media/field-work/field-work-6.jpg" },
    { id: 507, category: "Field Work", title: "Field Work 7", image: "/assets/media/field-work/field-work-7.jpg" },
    { id: 508, category: "Field Work", title: "Field Work 8", image: "/assets/media/field-work/field-work-8.jpg" },
    { id: 509, category: "Field Work", title: "Field Work 9", image: "/assets/media/field-work/field-work-9.jpg" },

    // Energy
    { id: 101, category: "Energy", title: "Power Supply Framework", image: "/assets/media/energy/energy-1.jpg" },
    { id: 102, category: "Energy", title: "NCR Baseline Assessment", image: "/assets/media/energy/energy-2.jpg" },
    { id: 103, category: "Energy", title: "Energy Infrastructure", image: "/assets/media/energy/energy-3.jpg" },
    { id: 104, category: "Energy", title: "Power Sector Consultation", image: "/assets/media/energy/energy-4.jpg" },
    { id: 105, category: "Energy", title: "Sustainable Governance", image: "/assets/media/energy/energy-5.jpg" },

    // International Dialogue 2026 hidden as per request
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
    // International Dialogues hidden as per request
    // Global Dialogues
    { id: 601, category: "Global Dialogues", title: "Global Dialogue 1", image: "/assets/media/global-dialogues/global-dialogue-1.jpg" },
    { id: 602, category: "Global Dialogues", title: "Global Dialogue 2", image: "/assets/media/global-dialogues/global-dialogue-2.jpg" },
    { id: 603, category: "Global Dialogues", title: "Global Dialogue 3", image: "/assets/media/global-dialogues/global-dialogue-3.jpg" },
    { id: 604, category: "Global Dialogues", title: "Global Dialogue 4", image: "/assets/media/global-dialogues/global-dialogue-4.jpg" },
    { id: 605, category: "Global Dialogues", title: "Global Dialogue 5", image: "/assets/media/global-dialogues/global-dialogue-5.jpg" },
    { id: 606, category: "Global Dialogues", title: "Global Dialogue 6", image: "/assets/media/global-dialogues/global-dialogue-6.jpg" },
    { id: 607, category: "Global Dialogues", title: "Global Dialogue 7", image: "/assets/media/global-dialogues/global-dialogue-7.jpg" },
    { id: 608, category: "Global Dialogues", title: "Global Dialogue 8", image: "/assets/media/global-dialogues/global-dialogue-8.jpg" },
    { id: 609, category: "Global Dialogues", title: "Global Dialogue 9", image: "/assets/media/global-dialogues/global-dialogue-9.jpg" },
    { id: 610, category: "Global Dialogues", title: "Global Dialogue 10", image: "/assets/media/global-dialogues/global-dialogue-10.jpg" },

    // Policy Roundtables photos
    { id: 401, category: "Policy Roundtables", title: "Roundtable 1", image: "/assets/media/policy-roundtables/roundtable-1.jpg" },
    { id: 402, category: "Policy Roundtables", title: "Roundtable 2", image: "/assets/media/policy-roundtables/roundtable-2.jpg" },
    { id: 403, category: "Policy Roundtables", title: "Roundtable 3", image: "/assets/media/policy-roundtables/roundtable-3.jpg" },
    { id: 404, category: "Policy Roundtables", title: "Roundtable 4", image: "/assets/media/policy-roundtables/roundtable-4.jpg" },
    { id: 405, category: "Policy Roundtables", title: "Roundtable 5", image: "/assets/media/policy-roundtables/roundtable-5.jpg" },
    { id: 406, category: "Policy Roundtables", title: "Roundtable 6", image: "/assets/media/policy-roundtables/roundtable-6.jpg" },
    { id: 407, category: "Policy Roundtables", title: "Roundtable 7", image: "/assets/media/policy-roundtables/roundtable-7.jpg" },
    { id: 408, category: "Policy Roundtables", title: "Roundtable 8", image: "/assets/media/policy-roundtables/roundtable-8.jpg" }
];

// Using shared ImageWithSkeleton component

const Media = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get("category");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
        if (categoryQuery && mediaCategories.includes(categoryQuery)) {
            setSelectedCategory(categoryQuery);
        } else {
            setSelectedCategory("All");
        }
        setVisibleCount(9); // Reset visible count on category change
    }, [categoryQuery]);

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        if (cat === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category: cat });
        }
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 9);
    };

    const filteredMedia = selectedCategory === "All"
        ? mediaData
        : mediaData.filter(item => item.category === selectedCategory);

    const visibleMedia = filteredMedia.slice(0, visibleCount);

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

                {visibleMedia.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {visibleMedia.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (idx % 9) * 0.05 }}
                                    className="premium-card aspect-[4/3] bg-card rounded-3xl overflow-hidden group relative border border-border transition-all shadow-sm"
                                >
                                    <ImageWithSkeleton src={item.image} alt={item.title} />
                                </motion.div>
                            ))}
                        </div>

                        {visibleCount < filteredMedia.length && (
                            <div className="mt-16 flex justify-center">
                                <Button
                                    onClick={handleLoadMore}
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold group shadow-lg transition-all"
                                >
                                    Load More Works
                                    <ChevronDown className="ml-2 h-4 w-4 transform group-hover:translate-y-1 transition-transform" />
                                </Button>
                            </div>
                        )}
                    </>
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
