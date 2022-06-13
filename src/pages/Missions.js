import React, { useEffect } from 'react';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    console.log('Missions');
  }, []);
  return (
    <div />
  );
};

export default Missions;
