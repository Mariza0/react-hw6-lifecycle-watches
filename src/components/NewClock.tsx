import React from 'react';

interface NewClockProps {
  city: string;
  time: string;
}

const NewClock: React.FC<NewClockProps> = ({ city, time }) => {
  return (
    <div className="clock">
      <span className='clock-city'>{city}</span>
      <div className='clock-time'>{time}</div>
    </div>
  );
};

export default NewClock;

