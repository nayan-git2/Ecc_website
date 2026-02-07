import React from "react";
import "./Gallery.css";
// Import local assets
import event1 from "../assets/event1.jpg";
import aiworkshop from "../assets/aiworkshop.JPG";
import feori from "../assets/feori.jpg";
import inau from "../assets/inau.jpg";
import heads from "../assets/heads.jpeg";
import java from "../assets/java.jpeg";
import ai from "../assets/ai.jpeg"; 
import javawork from "../assets/javawork.jpeg"; 
import teamsiting from "../assets/teamsiting.jpeg"; 
import group from "../assets/group.jpeg";   
import webd from "../assets/webd.jpeg"; 
import code from "../assets/code.jpeg"; 
import hi from "../assets/hi.jpeg";     


const Gallery = () => {
    const items = [
        { id: 1, title: "FE Orientation", image: feori },
        { id: 2, title: "AI Workshop", image: aiworkshop },
        { id: 3, title: "Code Crafters", image: event1 },
        { id: 4, title: "Code Crafters", image: webd },
        { id: 5, title: "Inauguration", image: inau },
        { id: 6, title: "Members", image: teamsiting  },
        { id: 7, title: "Java Workshop", image: java },
        { id: 8, title: "Java Certification", image: group },
        { id: 9, title: "Code Climb Hackathon", image:code},
        { id: 10, title: "Students competing", image: hi },
        { id: 11, title: "Java Bootcamp", image:javawork },
        { id: 12, title: "Heads", image: heads },
        { id: 13, title: "AI Workshop  ", image:ai},
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Moments in <span className="gradient-text">Pixels</span></h1>
            <div className="gallery-grid">
                {items.map((item) => (
                    <div key={item.id} className={`gallery-item item-${item.id} glass`}>
                        <img src={item.image} alt={item.title} className="gallery-image" />
                        <div className="gallery-overlay">
                            <span>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
