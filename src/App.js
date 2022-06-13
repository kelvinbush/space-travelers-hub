import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
