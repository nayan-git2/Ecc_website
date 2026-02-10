import React from "react";
import "./Team.css";
import armaansir from "../assets/armaansir.png";
import kanchan from "../assets/kanchan.jpeg";
import gaurav from "../assets/gaurav.jpeg";
import swi from "../assets/swi.jpeg";
import pravin from "../assets/pravin.jpeg";
import gayu from "../assets/gayu.jpeg";
import arth from "../assets/arth.jpeg";
import nayan from "../assets/nayan.jpeg";
import sanika from "../assets/sanika.jpeg";
import pranav from "../assets/pranav.jpeg";
import sid from "../assets/sid.jpeg";
import neel from "../assets/neel.jpeg";
import pratiksha from "../assets/pratiksha.jpeg";
import savi from "../assets/savi.jpeg"; 
import sumit from "../assets/sumit.jpeg"; 
import adi from "../assets/adi.png";
import san from "../assets/san.jpeg"; 
import ravi from "../assets/ravi.jpeg";     
import abhi from "../assets/abhi.jpeg";  

const TeamMember = ({ name, role, color, isLarge, image }) => (
    <div className={`team-card glass ${isLarge ? 'large-frame' : ''}`} style={{ '--accent': color }}>
        <div className="member-avatar">
            {image && <img src={image} alt={name} className="member-img" />}
        </div>
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
);

const Team = () => {
    const coordinator = {
        name: "Armaan Sheikh",
        role: "Faculty Coordinator",
        color: "#f59e0b",
        isLarge: true,
        image: armaansir
    };

    const members = [
        { name: "Gaurav Sabe", role: "President", color: "#22d3", image: gaurav },
        { name: "kanchan Rajput", role: "Vice President", color: "#a855f7", image: kanchan },
        { name: "Sumeet Yadav", role: "Vice President", color: "#22c55e", image:sumit },
        { name: "Swikriti Ghosh", role: "Secretary", color: "#fb7185", image: swi },
        { name: "Pravin Rathod", role: "Secretary", color: "#3b82f6", image: pravin },
        { name: "Abhijit Sawant", role: "Technical Head", color: "#f472b6", image: abhi },
        { name: "Aditya Nikam", role: "Technical Head", color: "#c084fc", image: adi },
        { name: "Pranav Mulik", role: "Database Head", color: "#fbbf24", image: pranav },
        { name: "Pratiksha Pankar", role: "Database Head", color: "#2dd4bf", image: pratiksha },
        { name: "Gayatri Pawar", role: "Treasurer", color: "#2dd4bf", image: gayu },
        { name: "Neel Malpure", role: "Treasurer", color: "#2dd4bf", image: neel },
        { name: "Arth Waghmode", role: "Creative and Social Media Head", color: "#2dd4bf", image: arth },
        { name: "Ravi Shriwastwa", role: "Public Relation & Marketting Head", color: "#2dd4bf", image: ravi },
        { name: "Sanika Kamble", role: "Public Relation & Marketting Head", color: "#2dd4bf", image: sanika },
        { name: "Siddhesh Shinde", role: "Event Management Head", color: "#2dd4bf", image: sid },
        { name: "Savee Lakade", role: "Event Management Head", color: "#2dd4bf", image: savi },
        { name: "Nayan Bhoyar", role: "Joint Secretary", color: "#2dd4bf", image: nayan },
        { name: "Sanskruti Jawale", role: "Joint Secretary", color: "#2dd4bf", image: san },

    ];

    return (
        <div className="team-container">
            <h1 className="team-title">Our <span className="gradient-text">Elite</span> Team</h1>

            <div className="coordinator-section">
                <TeamMember {...coordinator} />
            </div>

            <div className="team-grid">
                {members.map((m, i) => (
                    <TeamMember key={i} {...m} />
                ))}
            </div>
        </div>
    );
};

export default Team;
