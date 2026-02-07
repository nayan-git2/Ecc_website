import React from 'react';
import './LogoLoop.css';

const techLogos = [
    { name: 'JavaScript', color: '#f7df1e', icon: 'JS', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', color: '#3178c6', icon: 'TS', url: 'https://www.typescriptlang.org/' },
    { name: 'React', color: '#61dafb', icon: 'React', url: 'https://react.dev/' },
    { name: 'Python', color: '#ab377bff', icon: 'Py', url: 'https://www.python.org/' },
    { name: 'Node.js', color: '#339933', icon: 'Node', url: 'https://nodejs.org/' },
    { name: 'C++', color: '#9731b6ff', icon: 'C++', url: 'https://isocpp.org/' },
    { name: 'Java', color: '#007396', icon: 'Java', url: 'https://www.java.com/' },
    { name: 'Rust', color: '#e05151ff', icon: 'Rust', url: 'https://www.rust-lang.org/' },
    { name: 'Go', color: '#00add8', icon: 'Go', url: 'https://go.dev/' },
    { name: 'Docker', color: '#2496ed', icon: 'Docker', url: 'https://www.docker.com/' },
    { name: 'Tailwind', color: '#06b6d4', icon: 'CSS', url: 'https://tailwindcss.com/' },
    { name: 'MongoDB', color: '#32dd9bff', icon: 'DB', url: 'https://www.mongodb.com/' },
];

const LogoLoop = () => {
    // Duplicate the list to ensure seamless looping
    const doubledLogos = [...techLogos, ...techLogos];

    return (
        <div className="logo-loop-container">
            <div className="logo-loop-track">
                {doubledLogos.map((tech, index) => (
                    <a
                        key={`${tech.name}-${index}`}
                        href={tech.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="logo-item glass"
                        style={{ '--accent-color': tech.color }}
                    >
                        <div className="logo-icon-wrapper">
                            <span className="logo-text">{tech.icon}</span>
                        </div>
                        <span className="logo-name">{tech.name}</span>
                    </a>
                ))}
            </div>

            {/* Gradient overlays for smooth fading at edges */}
            <div className="fade-overlay side-left"></div>
            <div className="fade-overlay side-right"></div>
        </div>
    );
};

export default LogoLoop;

