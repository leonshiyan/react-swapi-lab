import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import './ShipDetails.css'

const ShipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      console.log(location.state.ship.url)
      const shipData = await getDetails(location.state.ship.url)
      setShipDetails(shipData)
    }
    fetchDetails()
  }, [location.state.ship.url])

  return ( 
    <div className='shipCard'>
      <h3>NAME: {shipDetails.name}</h3>
      <h5>MODEL: {shipDetails.model}</h5>
      <Link to='/'>RETURN</Link>
    </div>
    
  )
}

export default ShipDetails;