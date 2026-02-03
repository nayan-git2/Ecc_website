import Hero from "../components/Hero/hero";

import LogoLoop from "../components/LogoLoop/LogoLoop";
import CodeCard from "../components/CodeCard/CodeCard";
import EventsSection from "../components/EventsSection/EventsSection";

const Home = () => {
    return (
        <main>
            <Hero />
            <CodeCard />
            <EventsSection />
            <LogoLoop />
        </main>
    );
};

export default Home;
