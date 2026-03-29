import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../supabaseClient";
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error, config_error, table_error

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if environment variables are set
        const isPlaceholder = import.meta.env.VITE_SUPABASE_URL === "YOUR_SUPABASE_URL" || 
                           import.meta.env.VITE_SUPABASE_ANON_KEY === "YOUR_SUPABASE_ANON_KEY";
        
        if (isPlaceholder || !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
            console.error("Supabase URL and Key are not set in .env!");
            setStatus("config_error");
            return;
        }

        setStatus("loading");

        try {
            const { error } = await supabase
                .from("contacts")
                .insert([{ name, email, message }]);

            if (error) {
                if (error.code === "PGRST116" || error.message.includes("relation \"contacts\" does not exist")) {
                    setStatus("table_error");
                } else {
                    throw error;
                }
                return;
            }

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");

            // Revert to idle after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
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

            <motion.div 
                className="contact-content glass"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
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

                    <AnimatePresence mode="wait">
                        {status === "success" && (
                            <motion.div 
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="status-msg success"
                            >
                                ✨ Message sent successfully!
                            </motion.div>
                        )}
                        {status === "config_error" && (
                            <motion.div 
                                key="config"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="status-msg error"
                            >
                                🔧 Configuration Error: Please check your .env file.
                            </motion.div>
                        )}
                        {status === "table_error" && (
                            <motion.div 
                                key="table"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="status-msg error"
                            >
                                🗄️ Database Error: "contacts" table not found.
                            </motion.div>
                        )}
                        {status === "error" && (
                            <motion.div 
                                key="error"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="status-msg error"
                            >
                                ❌ Failed to send. Please check console for details.
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === "loading"}
                    >
                        <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                        <div className="btn-glow"></div>
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
