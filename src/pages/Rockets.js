import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from '../component/RocketItem';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <section className="rocketsPage">
      <hr />
      <ul>
        {rockets.map((rocket) => (
          <RocketItem
            name={rocket.rocketname}
            key={rocket.id}
            image={rocket.image}
            description={rocket.description}
            type={rocket.type}
            id={rocket.id}
            reserved={rocket.reserved}
          />
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
