import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const shipDetails = () => {
  const [shipDetails, setShipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const monsterData = await getDetails(location.state.monster.url)
      setShipDetails(monsterData)
    }
    fetchDetails()
  }, [location.state.monster.url])

  return ( 
    <>
      <h3>Monster Deets</h3>
      <img src="http://theoldreader.com/kittens/320/240/" alt="" />
      <h3>{shipDetails.name}</h3>
      <h4>Size: {shipDetails.size}</h4>
      <h4>Type: {shipDetails.type}</h4>
      <h4>AC: {shipDetails.armor_class}</h4>
      <h4>Actions:</h4>
      {shipDetails.actions?.length ?
        <>
          {shipDetails.actions.map(action =>
            <div key={action.name}>
              <h4 >{action.name}</h4>
              <h5>{action.desc}</h5>
            </div>
          )}
        </>
        :
        <p>This poor monster has no actions. Womp womp.</p>
      }
    </>
  )
}

export default shipDetails;