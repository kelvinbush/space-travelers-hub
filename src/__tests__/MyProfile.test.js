import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import MyProfile from '../pages/MyProfile';

const MockMyProfileComponent = () => (
  <Provider store={store}>
    <MyProfile />
  </Provider>
);

describe('My profile component', () => {
  it('renders without crashing', () => {
    render(<MockMyProfileComponent />);
    const missionsHeaderText = screen.getByText(/My Missions/i);
    expect(missionsHeaderText).toBeInTheDocument();
  });
});
