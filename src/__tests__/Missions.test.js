import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import Missions from '../pages/Missions';

const MockMissionComponent = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Missions component', () => {
  it('renders without crashing', () => {
    render(<MockMissionComponent />);
    const missionsTableHeader = screen.getByText('Mission');
    expect(missionsTableHeader).toBeInTheDocument();
  });
});
