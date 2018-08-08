// Data
const places = [
  {
    id: 0,
    position: {
        lat: 53.485377,
        lng: -2.202212
    },
    picture: null,
    foursquareID: '4fe2e324e4b0d2de33cf1658',
    name: 'Etihad Campus Metrolink Station ',
  },
  {
    id: 1,
    position: {
        lat: 53.48337251605465,
        lng: -2.200591564178467
    },
    picture: null,
    foursquareID: '4ade0e32f964a520506f21e3',
    name:  'Etihad Stadium'
  },
  {
    id: 2,
    position: {
        lat: 53.48384494857132,
        lng: -2.2038745880126953
    },
    picture: null,
    foursquareID: '4c711036932aef3b52842677',
    name: 'Manchester Regional Arena'
  },
  {
    id: 3,
    position: {
        lat: 53.48621705339956,
        lng: -2.2023941217362095
    },
    picture: null,
    foursquareID: '4d29bf75f7a9224b3c4501a0',
    name: 'Manchester Tennis and Football Centre'
  },
  {
    id: 4,
    position: {
        lat: 53.48233785853625,
        lng: -2.1932775115284304
    },
    picture: null,
    foursquareID: '4bb99f0ecf2fc9b6d6a6a002',
    name: 'Philips Park'
  },
  {
    id: 5,
    position: {
        lat: 53.48194547153075,
        lng: -2.2049185052029188
    },
    picture: null,
    foursquareID: '4ca0c6c1fee9b21a83f5a145',
    name: 'Mercedes-Benz Central'
  }
];

export const getFoursquareData = () => {
  const fourSquare = {
    baseUrl: 'https://api.foursquare.com/v2/venues/',
    picSuffix: '/photos?&oauth_token=IUT0DOG5UFM4FYIZUGJ5QPG1FXSYTBOX434C0M0AAJIATBBA&v=20171222',
    client_id: 'CDQOSZY5CJHZS40WUJBMVMRONYYQKFRRSCGXGUDBGEZO0VAK', 
    client_secret: 'HHXR0XOYFAO3JVMGA5WDMEA0EMLKORGCZWVSRNFSKU0VKVE2' 
  };

  return fourSquare;
}

// API Calls
export const getPlaces = () => {
  return new Promise((resolve, reject) => {
    resolve(places);
    if (places.length === 0) {
      reject('something went wrong with the API call');
    }
  });
}

export const getFoursquarePicture = (url) =>
  fetch(url).then(function(response) {
      if (response.ok) {
          return response.json();
      }
  }).then(function(json) {
      // get the pic
      const picture = json.response.photos.items[0];
      const dimensions = '300x300';
      const pictureUrl = picture.prefix + dimensions + picture.suffix;
      // hook it up to the place
      // model.places[placeIndex].picture = pictureUrl;
      return pictureUrl;
  })
