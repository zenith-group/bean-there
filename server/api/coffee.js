const axios = require('axios');
const config = require('../../config.js');
const reviews = require('../../database/models').reviews;

module.exports = {
  list: (params) => {
    console.log('params', params);
    let storeDetails = {};
    return axios
      .get(
        `https://api.yelp.com/v3/businesses/search?categories=coffee&latitude=${params.lat}&longitude=${params.lng}&term=${params.term}&limit=50&radius=20000`,
        {
          headers: {
            'content-type': 'application/json',
            Authorization: config.YELP_API,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let stores = [];
        for (let i = 0; i < res.data.businesses.length; i++) {
          let currentStore = res.data.businesses[i];
          stores.push(reviews.readByStore(currentStore.id));
          currentStore.reviews = [];
          storeDetails[currentStore.id] = currentStore;
        }
        return Promise.all(stores).then((data) => {
          for (let i = 0; i < data.length; i++) {
            let currentStoreReviews = data[i].rows;
            if (currentStoreReviews[0] !== undefined) {
              storeDetails[currentStoreReviews[0].store_id].reviews =
                currentStoreReviews;
            }
          }
          return storeDetails;
        });
      })
      .catch((err) => {
        return err;
      });
  },
};
