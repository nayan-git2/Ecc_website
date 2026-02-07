import React from 'react';
import './SocialDock.css';
import InstagramIcon from '../../assets/InstagramIcon.jpg';
import LinkedinIcon from '../../assets/linkedinIcon.png';
import discord from '../../assets/discord.png'; 

const SocialDock = () => {
    const socials = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/entc_coding_club?igsh=MWIwaWx3ZnNudTE4',
            className: 'instagram',
            image: InstagramIcon
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/entc-coding-club/',
            className: 'linkedin',
            image: LinkedinIcon
        },
        {
            name: 'Discord',
            url: 'https://discord.gg/Ep9A4EbJ',
            className: 'discord',
            image: discord
        }
    ];

    return (
        <div className="social-dock-container">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-item ${social.className}`}
                >
                    <span className="social-tooltip">{social.name}</span>
                    <img src={social.image} alt={social.name} className="social-icon-img" />
                </a>
            ))}
        </div>
    );
};

export default SocialDock;
