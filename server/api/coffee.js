const axios = require('axios');
const config = require('../../config.js');
const reviews = require('../../database/models').reviews;

module.exports = {
  list: (params) => {
    let storeDetails = {};
    return axios
      .get(
        `https://api.yelp.com/v3/businesses/search?location=11206&term=coffee`,
        {
          headers: {
            'content-type': 'application/json',
            Authorization: config.YELP_API,
          },
        }
      )
      .then((res) => {
        let stores = [];
        for (let i = 0; i < res.data.businesses.length; i++) {
          let currentStore = res.data.businesses[i];
          stores.push(reviews.readByStore(currentStore.id));
          currentStore.reviews = [];
          storeDetails[currentStore.id] = currentStore;
        }
        return Promise.all(stores)
        .then(data => {
          // console.log(data[0].rows[0]);
          for (let i = 0; i < data.length; i++ ) {
            let currentStoreReviews = data[i].rows;
            if (currentStoreReviews[0] !== undefined) {
              storeDetails[currentStoreReviews[0].store_id].reviews = currentStoreReviews;
              return storeDetails;
            }
          }
        })
      })
      .catch((err) => {
        return err;
      });
  },
};
