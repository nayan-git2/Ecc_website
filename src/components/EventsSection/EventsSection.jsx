import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
    const events = [
        {
            id: 1,
            title: "Java Workshop Series",
            type: "Workshop",
            date: "oct 6-11, 2025",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.44.98.94 1.21 1.21.56 2.06 2.05 2.06 3.81" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Code Crafter",
            type: "Hackathon",
            date: "Mar 1-3, 2024",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.44.98.94 1.21 1.21.56 2.06 2.05 2.06 3.81" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Web Development Bootcamp",
            type: "Bootcamp",
            date: "Mar 10, 2024",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.44.98.94 1.21 1.21.56 2.06 2.05 2.06 3.81" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Code Clash",
            type: "Coding",
            date: "Jan 30, 2025",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.44.98.94 1.21 1.21.56 2.06 2.05 2.06 3.81" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        },
        {
            id: 5,
            title: "Artificial Intelligence Workshop",
            type: "Workshop",
            date: "Jan 28-29, 2025",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.44.98.94 1.21 1.21.56 2.06 2.05 2.06 3.81" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        }
    ];

    return (
        <section className="events-section">
            <div className="events-header">
                <h1 className="events-title">Events</h1>
                <p className="events-subtitle">
                    Discover our latest workshops, hackathons, and tech talks. Join us to innovate, learn, and grow together.
                </p>
            </div>

            <div className="events-grid">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <div className="event-type-tag">
                            {event.icon}
                            {event.type}
                        </div>
                        <h3 className="event-card-title">{event.title}</h3>
                        <div className="event-date-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                <line x1="16" x2="16" y1="2" y2="6" />
                                <line x1="8" x2="8" y1="2" y2="6" />
                                <line x1="3" x2="21" y1="10" y2="10" />
                            </svg>
                            {event.date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsSection;
