import React from 'react';
import { useSelector } from 'react-redux';
import styles from './MyProfile.module.scss';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <hr />
      <section className={styles.profile}>
        <div>
          <h2>My Missions</h2>
          <div className={styles.profile__card}>
            {reservedMissions.map((mission) => (
              <div key={mission.mission_id}>
                <p>{mission.mission_name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2>My Rockets</h2>
          <div className={styles.profile__card} />
        </div>
      </section>
    </>
  );
};

export default MyProfile;
