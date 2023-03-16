import HeaderForm from './components/HeaderForm';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import People from './views/People';
import Planets from './views/Planets';

function App() {
  return (
    <div className='center'>
      <HeaderForm />

      <Routes>
        <Route path="/people/:id" element={<People/>} />
        <Route path="/planets/:id" element={<Planets/>} />
      </Routes>

    </div>
  );
}

export default App;
