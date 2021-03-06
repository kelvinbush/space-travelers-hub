import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMissionAction, leaveMissionAction } from '../redux/missions/missions';
import styles from './Missions.module.scss';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const toggleReservation = (mission) => {
    if (mission.reserved) {
      return dispatch(leaveMissionAction(mission.mission_id));
    }
    return dispatch(joinMissionAction(mission.mission_id));
  };

  const tableHeaders = ['Mission', 'Description', 'Status', 'Action'];

  return (
    <section className={styles.missions}>
      <hr />
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            {tableHeaders.map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className={styles.missions__row}>
              <td className={styles.missions__name}>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className={`${styles.missions__status} ${mission.reserved ? styles.missions__st_active : ''}`}>
                <p className={`${styles.missions__status} ${mission.reserved ? styles.missions__st_active : ''}`}>
                  {mission.reserved && 'Active Member'}
                  {!mission.reserved && 'NOT A MEMBER'}
                </p>
              </td>
              <td className={`${styles.missions__actions} ${mission.reserved ? styles.missions__actions_active : ''}`}>
                <button
                  onClick={() => toggleReservation(mission)}
                  type="button"
                >
                  {mission.reserved && 'Leave Mission'}
                  {!mission.reserved && 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
