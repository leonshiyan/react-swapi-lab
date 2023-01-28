import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'



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
      <Row xs={1} md={4} className="g-3">
      {starshipList.length ?
      <>
          {starshipList.map((ship,idx) => 
          <Col key={idx}>
          <Card style={{ width: '12rem' }} bg={'light'}>
          <Card.Body>
            <Card.Title><Link to='/ship' state={{ship}} >{ship.name}</Link></Card.Title>
            <Card.Subtitle className="mb-1 text-muted">{ship.manufacturer}</Card.Subtitle>
            <Card.Text></Card.Text>
            <Card.Link></Card.Link>
          </Card.Body>
        </Card>
        </Col>
          )}
      </>
        :
        <>
          <div>Loading ...</div>
        </>
      }
      </Row>
    </>
  )
}
export default StarshipList