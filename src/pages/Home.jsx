import { motion } from "framer-motion";
import Hero from "../components/Hero/Hero";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import CodeCard from "../components/CodeCard/CodeCard";
import EventsSection from "../components/EventsSection/EventsSection";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";

const ScrollReveal = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const Home = () => {
    return (
        <main>
            <Hero />
            <ScrollReveal><UpcomingEvents /></ScrollReveal>
            <ScrollReveal><CodeCard /></ScrollReveal>
            <ScrollReveal><EventsSection /></ScrollReveal>
            <ScrollReveal><LogoLoop /></ScrollReveal>
        </main>
    );
};

export default Home;
