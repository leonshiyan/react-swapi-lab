import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getAllStarships } from '../../services/sw-api'

const StarshipList = (props) => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(()=> {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      <h1>All Starships</h1>
      {starshipList.length ?
        <>
          {starshipList.map(ship => 
            <div key={ship.index}>
              {ship.name}
            </div> 
          )}
        </>
        :
        <>
          <div>Loading ...</div>
        </>
      }
    </>
  )
}
export default StarshipList