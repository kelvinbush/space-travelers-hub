import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from '../component/RocketItem';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  console.log(rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <ul>
      {rockets.map((rocket) => (
        <RocketItem name={rocket.name} key={rocket.id} image={rocket.im/>
      ))}
    </ul>
  );
};

export default Rockets;
