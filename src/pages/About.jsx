import React from "react";
import "./About.css";
import Stats from "../components/Stats/Stats";
import SocialDock from "../components/SocialDock/SocialDock";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-decor">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <header className="about-hero">
                <div className="hero-badge">Est. 2024</div>

                <div className="club-intro-box glass">
                    <p className="club-description">
                        Welcome to the Entc Coding Club (ECC), where innovation meets execution. We are a dynamic community
                        of passionate learners and builders dedicated to mastering the digital landscape. Whether it's
                        crafting scalable software, diving into AI, or competing in hackathons, ECC is your
                        platform to excel and evolve.
                    </p>
                </div>
            </header>

            <div className="about-section-header">
                <h1 className="about-title">More Than Just <span className="gradient-text">Code</span></h1>
                <p className="about-subtitle">A complete ecosystem for developers to learn, build, and grow together.</p>
            </div>

            <div className="about-grid">
                <div className="about-card glass" style={{ '--accent': '#a855f7' }}>
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <h3>Workshops</h3>
                    <p>Interactive sessions focused on learning specific tools and technologies.
                        Hands-on activities guided by experts to build practical skills.
                        Ideal for gaining quick insights and real-world exposure.</p>
                </div>

                <div className="about-card glass" style={{ '--accent': '#22d3ee' }}>
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                    </div>
                    <h3>Hackathons</h3>
                    <p>Fast-paced coding events where participants build innovative solutions in a limited time.
                        Encourage teamwork, creativity, and real-world problem solving.
                        A great platform to learn new technologies and win exciting prizes.</p>
                </div>

                <div className="about-card glass" style={{ '--accent': '#fb24d7ff' }}>
                    <div className="card-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V13a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"></path></svg>
                    </div>
                    <h3>Bootcamp</h3>
                    <p>
                        Intensive, hands-on training programs focused on building practical technical skills.
                        Designed to strengthen fundamentals through guided learning and real-world projects.

                    </p>
                </div>
            </div>
            <Stats />
            <div className="about-social-section">
                <h2 className="social-connect-title">Connect With <span className="gradient-text">Us</span></h2>
                <SocialDock />
            </div>
        </div>
    );
};

export default About;
