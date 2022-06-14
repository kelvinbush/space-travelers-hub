/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const RocketItem = (props) => {
  const { id, name, description, type, image } = props;
  return (
    <div className="rocketContainer">
      <img src={image} alt={name} className="rocketImage" />
      <div className="rocketDetailsContainer">
        <header className="rocketName">{name}</header>
        <p className="rocketDescription">{description}</p>
        <button type="button" className="rocketReserveBtn">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

export default RocketItem;
