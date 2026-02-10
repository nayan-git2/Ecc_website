import Hero from "../components/Hero/Hero";

import LogoLoop from "../components/LogoLoop/LogoLoop";
import CodeCard from "../components/CodeCard/CodeCard";
import EventsSection from "../components/EventsSection/EventsSection";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";

const Home = () => {
    return (
        <main>
            <Hero />
            <UpcomingEvents />
            <CodeCard />
            <EventsSection />
            <LogoLoop />
        </main>
    );
};

export default Home;
