import './App.css'
import { Route, Routes } from 'react-router-dom'

import StarshipList from './pages/StarshipList/StarshipList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<StarshipList />} />
      </Routes>
    </div>
  )
}

export default App