import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-decor">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="contact-content glass">
                <div className="contact-header">
                    <h1 className="contact-title">Get in <span className="gradient-text">Touch</span></h1>
                    <p className="contact-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="your@email.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Tell us more..." required></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        <span>Send Message</span>
                        <div className="btn-glow"></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
