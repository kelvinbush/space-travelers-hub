import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import styles from './Missions.module.scss';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const tableHeaders = ['Mission', 'Description', 'Status', 'Action'];

  return (
    <section className={styles.missions}>
      <hr />
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className={styles.missions__name}>{mission.mission_name}</td>
              <td className={styles.missions__description}>{mission.description}</td>
              <td className={`${styles.missions__status} ${mission.reserved ? styles.missions__st_active : ''}`}>
                <p>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</p>
              </td>
              <td className={`${styles.missions__actions} ${mission.reserved ? styles.missions__actions_active : ''}`}>
                <button type="button">{mission.reserved ? 'Leave Mission' : 'Join Mission'}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
