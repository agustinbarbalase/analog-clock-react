import React from 'react';
import './index.css';

const ROTATE_COEFFICIENT = {
  'second': 60,
  'minute': 60,
  'hour': 12
}

const rotate = (styleType, time) => {
  return {
    transform: `rotate(calc(360deg/${ROTATE_COEFFICIENT[styleType]} * ${time}))`
  };
};

const Marker = ({ time, styleType }) => {
  return (
    <div className={`${styleType}-content-marker`} style={rotate(styleType, time)}>
      <div className={`${styleType}-marker`}></div>
    </div>
  );
}

export default Marker;