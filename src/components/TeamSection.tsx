import { Users, Linkedin, Mail } from "lucide-react";
import betermariyamProfilePic from "@/assets/1728312666234.jpeg";
import edomProfilePic from "@/assets/2025-11-20 22.39.35.jpg";
import amanuelProfilePic from "@/assets/2025-11-20 22.40.27.jpg";
import mohammedProfilePic from "@/assets/2025-11-20 22.40.39.jpg";
import birukProfilePic from "@/assets/2025-11-21 10.24.45.jpg";
import yodaheProfilePic from "@/assets/IMAGE 2025-12-17 11:58:58.jpg";

const team = [
    {
        name: "BetreMariyam Yosef",
        role: "Founder & Digital Lead",
        description: "Seasoned Full-Stack Developer with deep expertise in Artificial Intelligence. Architects and builds robust, scalable applications, integrating cutting-edge AI solutions to drive innovation.",
        image: betermariyamProfilePic,
        linkedin: "https://www.linkedin.com/in/betremariyamyosef/",
        skills: ["Full-Stack", "AI Strategy", "Cybersecurity", "Leadership"]
    },
    {
        name: "Amanuel Alemu",
        role: "Security Solutions",
        description: "Certified in Cybersecurity and Cyberattacks. Skilled in IT Hardware Support and Project Management, ensuring essential and secure infrastructure operations.",
        image: amanuelProfilePic,
        linkedin: "https://www.linkedin.com/in/amanuel-alemu-407b2a325/",
        skills: ["Cybersecurity", "IT Support", "Project Management", "Network Security"]
    },
    {
        name: "Mohammed Salih",
        role: "AI Integration Lead",
        description: "Experienced Junior Full Stack Developer proficient in React, Rails, and API Development. Foundational skills in building data-driven applications to integrate AI services.",
        image: mohammedProfilePic,
        linkedin: "https://www.linkedin.com/in/mohammed-salih-245307333/",
        skills: ["React", "Node.js", "API Dev", "AI Integration"]
    },
    {
        name: "Edom Mulugeta",
        role: "Software Development",
        description: "Strong full-stack programming skills in Java, JavaScript, Express Js, and Python. Experienced in developing complex platforms ranging from e-commerce to management systems.",
        image: edomProfilePic,
        linkedin: "https://www.linkedin.com/in/edom-mulugeta-88870027a/",
        skills: ["Java", "JavaScript", "Python", "Full-Stack"]
    },
    {
        name: "Biruk Damtew",
        role: "Cloud & DevOps",
        description: "Oversees the infrastructure, automation, and continuous delivery pipelines, ensuring robust and scalable cloud solutions for our global clients.",
        image: birukProfilePic,
        skills: ["Cloud Infrastructure", "DevOps", "Automation", "CI/CD"]
    },
    {
        name: "Yodahe Eshetu",
        role: "Backend Architecture",
        description: "Backend expert focused on building reliable, scalable server-side systems and APIs that handle high traffic and complex transactional data.",
        image: yodaheProfilePic,
        skills: ["Backend Development", "API Design", "Databases", "Scalability"]
    },
];

const TeamSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background border-t border-border/30">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-border/40 pb-8 tracking-tight">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                            <Users className="w-4 h-4 text-accent" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                                The Team
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                            Meet Our <span className="text-muted-foreground font-light">Experts</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-md md:text-right text-lg">
                        A collective of brilliant minds, developers, and strategists driving innovation at SchoolPoint.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-card/40 border border-border/50 rounded-3xl overflow-hidden hover:bg-card/80 hover:border-accent/30 hover:shadow-elevated transition-all duration-500"
                        >
                            {/* Card Header: Image & Basics */}
                            <div className="p-8 pb-0">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-border">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-accent/80 font-semibold uppercase tracking-wider mt-1">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed min-h-[4.5rem]">
                                    {member.description}
                                </p>
                            </div>

                            {/* Card Footer: Skills & Socials */}
                            <div className="mt-8 p-8 pt-6 bg-primary/5 border-t border-border/30 flex-1 flex flex-col justify-end">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {member.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-background border border-border rounded-full text-xs font-medium text-muted-foreground group-hover:border-accent/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    {member.linkedin ? (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-background border border-border rounded-xl text-muted-foreground hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all"
                                            title="LinkedIn"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
