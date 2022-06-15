import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './styles/rocketItem.module.css';
import { bookRocket, cancelBookRocket } from '../redux/rockets/rockets';

const RocketItem = (props) => {
  const dispatch = useDispatch();

  const {
    id, name, description, image, reserved,
  } = props;
  return (
    <div className={styles.rocketContainer}>
      <img src={image} alt={name} className={styles.rocketImage} />
      <div className={styles.rocketDetailsContainer}>
        <header className={styles.rocketName}>{name}</header>
        <p className="rocketDescription">
          {reserved && <span className={styles.rocketRsvSpan}>Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            className={styles.rocketCancelRsvBtn}
            onClick={() => dispatch(cancelBookRocket(id))}
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            className={styles.rocketRsvBtn}
            onClick={() => dispatch(bookRocket(id))}
          >
            Reserve Rocket
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
  reserved: PropTypes.bool,
};

RocketItem.defaultProps = {
  reserved: false,
};

export default RocketItem;
