import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure that URL and key are not placeholders before submitting
        if (import.meta.env.VITE_SUPABASE_URL === "YOUR_SUPABASE_URL") {
            console.error("Supabase URL and Key are not set in .env!");
            setStatus("error");
            return;
        }

        setStatus("loading");

        try {
            // NOTE: Make sure the "contacts" table exists in your Supabase DB
            // Run the script in /supabase/setup.sql to create it
            const { error } = await supabase
                .from("contacts")
                .insert([{ name, email, message }]);

            if (error) throw error;

            setStatus("success");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Submission failed:", error.message);
            setStatus("error");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-decor">
                <div className="blob blob-2"></div>
            </div>

            <div className="contact-content glass">
                <div className="contact-header">
                    <h1 className="contact-title">Get in <span className="gradient-text">Touch</span></h1>
                    <p className="contact-subtitle">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            placeholder="Tell us more..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    {status === "success" && (
                        <div className="status-msg success">Message sent successfully!</div>
                    )}
                    {status === "error" && (
                        <div className="status-msg error">Failed to send message. Please try again.</div>
                    )}

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === "loading"}
                    >
                        <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                        <div className="btn-glow"></div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
