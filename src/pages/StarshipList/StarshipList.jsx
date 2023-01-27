import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
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
      
      {starshipList.length ?
        <>
          {starshipList.map((ship,idx) => 
          <Card style={{ width: '18rem' }} key={idx}>
          <Card.Body>
            <Card.Title><Link to='/ship' state={{ship}} >{ship.name}</Link></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{ship.manufacturer}</Card.Subtitle>
            <Card.Text></Card.Text>
            <Card.Link></Card.Link>
          </Card.Body>
        </Card>
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