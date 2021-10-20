const Axios = require('axios')
// const Keys = require('../../config.js')

const getShops = (callBack) => {
  Axios.get(
      'https://api.yelp.com/v3/businesses/search?term=coffee&latitude=39.3146254&longitude=-84.3187836'
      ,{
        Connection: 'keep-alive',
        Authorization: `Bearer ${Keys.yelp}`
      }
    )
    .then(data => callBack(null, data))
    .catch(err => callBack(err))
}

module.exports = getShops