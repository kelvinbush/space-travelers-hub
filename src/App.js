import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
