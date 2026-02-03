import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

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

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Building the Future,
          <br />
          <span className="gradient-text">One Commit</span> at a{" "}
          <span className="gradient-text-2">Time.</span>
        </h1>

        <p className="hero-subtitle">
          We do <span className="typewriter">{text}</span>
          <span className="cursor">|</span>
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/contact")}>
            Join Us
            <div className="btn-glow"></div>
          </button>
          <button className="btn-secondary" onClick={() => navigate("/about")}>
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
