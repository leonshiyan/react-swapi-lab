import './App.css'
import { Route, Routes } from 'react-router-dom'

import StarshipList from './pages/StarshipList/StarshipList'
import ShipDetails from './pages/ShipDetails/ShipDetails';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/ship' element={<ShipDetails />} />
      </Routes>
    </>
    
  )
}

export default App