import reducer, { fetchMissionAction, joinMissionAction } from '../missions/missions';

describe('Testing missions store', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should update state with new missions', () => {
    const initialState = [];
    const newMissions = [
      {
        mission_id: 1,
        name: 'Mission 1',
        description: 'Mission 1 description',
        reserved: false,
      },
      {
        mission_id: 2,
        name: 'Mission 2',
        description: 'Mission 2 description',
        reserved: false,
      },
    ];
    const action = fetchMissionAction(newMissions);
    expect(reducer(initialState, action)).toEqual(newMissions);
  });

  it('should update the reserved status of a mission', () => {
    const initialState = [
      {
        mission_id: 'm1',
        name: 'Mission 1',
        description: 'Mission 1 description',
      },
      {
        mission_id: 'm2',
        name: 'Mission 2',
        description: 'Mission 2 description',
      },
    ];
    const newState = [
      {
        mission_id: 'm1',
        name: 'Mission 1',
        description: 'Mission 1 description',
        reserved: true,
      },
      {
        mission_id: 'm2',
        name: 'Mission 2',
        description: 'Mission 2 description',
      },
    ];
    const action = joinMissionAction('m1');
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
