import { motion } from "framer-motion";
import "./Gallery.css";
import AI from "../assets/ai.jpeg";
import ppl from "../assets/group.jpeg";
import Javawork from "../assets/javawork.jpeg";
import team from "../assets/teamsiting.jpeg";
import leads from "../assets/heads.jpeg";

// ... (imports remain the same)

const items = [
    { id: 1, title: "AI Workshop", image: AI },
    { id: 2, title: "Certification", image: ppl },
    { id: 3, title: "Java Workshop", image: Javawork },
    { id: 4, title: "Committee", image: team },
    { id: 5, title: "Leads", image: leads },
];

const Gallery = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

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
        <div className="gallery-container">
            <motion.h1
                className="gallery-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Moments in <span className="gradient-text">Pixels</span>
            </motion.h1>

            <motion.div
                className="gallery-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        className={`gallery-item item-${item.id} glass`}
                        variants={itemVariants}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <img src={item.image} alt={item.title} className="gallery-image" />
                        <div className="gallery-overlay">
                            <span>{item.title}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Gallery;
