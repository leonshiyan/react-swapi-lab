import './App.css'
import { Route, Routes } from 'react-router-dom'

import StarshipList from './pages/StarshipList/StarshipList'

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