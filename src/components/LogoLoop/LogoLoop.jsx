import React from 'react';
import './LogoLoop.css';

const techLogos = [
    { name: 'JavaScript', color: '#f7df1e', icon: 'JS' },
    { name: 'TypeScript', color: '#3178c6', icon: 'TS' },
    { name: 'React', color: '#61dafb', icon: 'React' },
    { name: 'Python', color: '#ab377bff', icon: 'Py' },
    { name: 'Node.js', color: '#339933', icon: 'Node' },
    { name: 'C++', color: '#9731b6ff', icon: 'C++' },
    { name: 'Java', color: '#007396', icon: 'Java' },
    { name: 'Rust', color: '#e05151ff', icon: 'Rust' },
    { name: 'Go', color: '#00add8', icon: 'Go' },
    { name: 'Docker', color: '#2496ed', icon: 'Docker' },
    { name: 'Tailwind', color: '#06b6d4', icon: 'CSS' },
    { name: 'MongoDB', color: '#32dd9bff', icon: 'DB' },
];

const LogoLoop = () => {
    // Duplicate the list to ensure seamless looping
    const doubledLogos = [...techLogos, ...techLogos];

    return (
        <div className="logo-loop-container">
            <div className="logo-loop-track">
                {doubledLogos.map((tech, index) => (
                    <div
                        key={`${tech.name}-${index}`}
                        className="logo-item glass"
                        style={{ '--accent-color': tech.color }}
                    >
                        <div className="logo-icon-wrapper">
                            <span className="logo-text">{tech.icon}</span>
                        </div>
                        <span className="logo-name">{tech.name}</span>
                    </div>
                ))}
            </div>

            {/* Gradient overlays for smooth fading at edges */}
            <div className="fade-overlay side-left"></div>
            <div className="fade-overlay side-right"></div>
        </div>
    );
};

export default LogoLoop;
