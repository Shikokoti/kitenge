import React, { useState, useEffect } from 'react';

const TimeCountDown = () => {
  const countdownDate = new Date('2026-03-21T00:00:00').getTime();

  const [time, setTime] = useState({
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTime({
          days: '0',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: String(days),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className="react-countdown">
      <div className="time-section">
        <div className="time">{time.days}</div>
        <small className="time-text">Days</small>
      </div>
      <div className="time-section">
        <div className="time">{time.hours}</div>
        <small className="time-text">Hours</small>
      </div>
      <div className="time-section">
        <div className="time">{time.minutes}</div>
        <small className="time-text">Min</small>
      </div>
      <div className="time-section">
        <div className="time">{time.seconds}</div>
        <small className="time-text">Sec</small>
      </div>
    </div>
  );
};

export default TimeCountDown;
