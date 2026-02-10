import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
    return (
        <section className="upcoming-events-container">
            {/* Background Elements */}
            <div className="pirate-icon"></div>

            <div className="content-wrapper">
                <h4 className="events-heading">Upcoming Events</h4>

                <h2 className="main-title">Code Climb</h2>

                <p className="event-details">
                    <span>7 Hour Hackathon</span>
                    <span style={{ margin: '0 10px' }}>•</span>
                    <span>Set Sail Soon</span>
                </p>

                <button className="pirate-btn">
                    <span className="btn-glitch-text">Can Register soon!</span>
                </button>
            </div>
        </section>
    );
};

export default UpcomingEvents;
