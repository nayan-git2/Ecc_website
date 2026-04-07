import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";

const words = [
  "Hackathons",
  "Workshops",
  "Tech Events"
];

function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;
    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Building the Future,
          <br />
          <span className="gradient-text">One Commit</span> at a{" "}
          <span className="gradient-text-2">Time.</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          We do <span className="typewriter">{text}</span>
          <span className="cursor">|</span>
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            <span>Join Us</span>
            <div className="btn-glow"></div>
          </button>
          <button className="btn-secondary" onClick={() => navigate("/about")}>
            Explore More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
