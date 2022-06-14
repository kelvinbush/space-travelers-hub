import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/rocketItem.module.css';

const RocketItem = (props) => {
  const {
    id, name, description, image,
  } = props;
  return (
    <div className={styles.rocketContainer}>
      <img src={image} alt={name} className={styles.rocketImage} />
      <div className={styles.rocketDetailsContainer}>
        <header className="rocketName">{name}</header>
        <p className="rocketDescription">{description}</p>
        {id ? (
          <button type="button" className={styles.rocketRsvBtn}>
            Reserve Rocket
          </button>
        ) : (
          <button type="button" className={styles.rocketCancelRsvBtn}>
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default RocketItem;
