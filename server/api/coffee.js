const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  list: (params) => {
    return axios
      .get(
        `https://api.yelp.com/v3/businesses/search?location=11206&categories=coffee`,
        {
          headers: {
            'content-type': 'application/json',
            Authorization: config.YELP_API,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  },
};
