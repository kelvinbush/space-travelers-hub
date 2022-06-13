import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
