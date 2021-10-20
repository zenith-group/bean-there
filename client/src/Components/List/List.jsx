import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import KEYS from '/config'

const List = (props) => {

  const [places, setPlaces] = useState([])

  useEffect(() => {
    console.log('I am here 123')
    Axios.get('https://api.yelp.com/v3/businesses/search?term=coffee&latitude=39.3146254&longitude=-84.3187836',{
      headers: {
        Authorization: `Bearer ${KEYS.yelp}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        Accept: '*',
        'Content-Type': 'application/json'
      },
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
}

export default List