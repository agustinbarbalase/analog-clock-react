import React from 'react';
import useTime from 'hooks/useTime';
import Marker from 'components/Marker';
import './index.css';

const Clock = () => {
  const { 
    time,
    parseSeconds,
    parseMinutes,
    parseHours
  } = useTime();

  return (
    <div className="current-time">
      <div className="shadow-clock">
          <div className="shape-clock">
            <div className="content-clock">
              <Marker time={parseSeconds(time)} styleType="second"/>
              <Marker time={parseMinutes(time)} styleType="minute"/>
              <Marker time={parseHours(time)} styleType="hour"/>
              <div className="dot-clock">
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="details-time">
          { time.toLocaleTimeString() }
        </div>
        <div className="details-date">
          { time.toDateString() }
        </div>
      </div>
    </div>
  );
};

export default Clock;