import Axios from 'axios'
import KEYS from '/config.js'

const getCoffeeShops = (lat, lng) => {
  Axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=London`, {
  headers: {
    Authorization: `Bearer ${KEYS.yelp}`
},
  params: {
  categories: 'breakfast_brunch',
}
})
.then((res) => {
console.log(res)
})
.catch((err) => {
console.log ('error')
})
}

export default getCoffeeShops