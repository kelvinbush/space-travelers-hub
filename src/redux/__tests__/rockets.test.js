import reducer, { bookRocket, cancelBookRocket, fetchRockets } from '../rockets/rockets';

describe('Testing rockets store', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should update the reserved status of a mission', () => {
    const initialState = [
      {
        id: 'r1',
        rocketname: 'Rocket 1',
        description: 'Rocket 1 description',
        img: 'Rocket 1 Image',
      },
      {
        id: 'r2',
        rocketname: 'Rocket 2',
        description: 'Rocket 2 description',
        img: 'Rocket 2 Image',
      },
    ];
    const newState = [
      {
        id: 'r1',
        rocketname: 'Rocket 1',
        description: 'Rocket 1 description',
        img: 'Rocket 1 Image',
        reserved: true,
      },
      {
        id: 'r2',
        rocketname: 'Rocket 2',
        description: 'Rocket 2 description',
        img: 'Rocket 2 Image',
      },
    ];
    const action = bookRocket('r1');
    expect(reducer(initialState, action)).toEqual(newState);
  });

  it('should update the reserved status of a mission', () => {
    const initialState = [
      {
        id: 'r1',
        rocketname: 'Rocket 1',
        description: 'Rocket 1 description',
        img: 'Rocket 1 Image',
      },
      {
        id: 'r2',
        rocketname: 'Rocket 2',
        description: 'Rocket 2 description',
        img: 'Rocket 2 Image',
      },
    ];
    const newState = [
      {
        id: 'r1',
        rocketname: 'Rocket 1',
        description: 'Rocket 1 description',
        img: 'Rocket 1 Image',
        reserved: false,
      },
      {
        id: 'r2',
        rocketname: 'Rocket 2',
        description: 'Rocket 2 description',
        img: 'Rocket 2 Image',
      },
    ];
    const action = cancelBookRocket('r1');
    expect(reducer(initialState, action)).toEqual(newState);
  });
});
