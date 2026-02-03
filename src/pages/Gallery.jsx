import React from "react";
import "./Gallery.css";
// Import local assets
import event1 from "../assets/event1.jpg";
import aiworkshop from "../assets/aiworkshop.JPG";
import feori from "../assets/feori.jpg";
import inau from "../assets/inau.jpg";
import heads from "../assets/heads.jpeg";
import java from "../assets/java.jpeg";

const Gallery = () => {
    const items = [
        { id: 1, title: "FE Orientation", image: feori },
        { id: 2, title: "AI Workshop", image: aiworkshop },
        { id: 3, title: "Code Crafters", image: event1 },
        { id: 4, title: "ECC Summit", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" },
        { id: 5, title: "Inaugration", image: inau },
        { id: 6, title: "Java Workshop", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
        { id: 7, title: "Java Workshop", image: java },
        { id: 8, title: "Innovation Lab", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
        { id: 9, title: "Coding Bootcamp", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" },
        { id: 10, title: "Future Thinkers", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" },
        { id: 11, title: "Hardware Expo", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
        { id: 12, title: "Heads", image: heads },
        { id: 13, title: "Brainstorming", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" },
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
