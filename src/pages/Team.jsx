import { motion } from "framer-motion";
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

const TeamMember = ({ name, role, color, isLarge, image }) => {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.div 
            className={`team-card glass ${isLarge ? 'large-frame' : ''}`} 
            style={{ '--accent': color }}
            variants={itemVariants}
            whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 } 
            }}
        >
            <div className="member-avatar">
                {image && <img src={image} alt={name} className="member-img" />}
            </div>
            <h3>{name}</h3>
            <p>{role}</p>
        </motion.div>
    );
};

const Team = () => {
    const coordinator = {
        name: "Armaan Sheikh",
        role: "Faculty Coordinator",
        color: "#f59e0b",
        isLarge: true,
        image: armaansir
    };

    const members = [
        { name: "Gaurav Sabe", role: "President", color: "#22d3ee", image: gaurav },
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="team-container">
            <motion.h1 
                className="team-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Our <span className="gradient-text">Elite</span> Team
            </motion.h1>

            <motion.div 
                className="coordinator-section"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <TeamMember {...coordinator} />
            </motion.div>

            <motion.div 
                className="team-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {members.map((m, i) => (
                    <TeamMember key={i} {...m} />
                ))}
            </motion.div>
        </div>
    );
};

export default Team;
