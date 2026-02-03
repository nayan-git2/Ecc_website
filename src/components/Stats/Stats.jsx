import React, { useEffect, useState } from "react";
import "./stats.css";

const StatItem = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-item">
      <h2 className="stat-number">{count}+</h2>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats">
      <StatItem end={50} label="Active Members" />
      <StatItem end={100} label="Participation" />
      <StatItem end={15} label="Events Organized" />
    </section>
  );
};

export default Stats;
