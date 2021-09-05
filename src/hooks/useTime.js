import { useEffect, useState } from 'react';

const useTime = () => {
  const [ time, setTime ] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const parseSeconds = (time) => {
    return parseFloat(time.getSeconds());
  }

  const parseMinutes = (time) => {
    return parseFloat(time.getMinutes() + time.getSeconds()/60);
  };

  const parseHours = (time) => {
    return parseFloat(time.getHours() + time.getMinutes()/60 + time.getSeconds()/3600);
  }

  return {
    time,
    parseSeconds,
    parseMinutes,
    parseHours
  };
};

export default useTime;