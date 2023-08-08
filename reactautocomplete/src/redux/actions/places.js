// actions/places.js
import { mockSearchResults } from './mockdata';
import axios from 'axios';


const fetchPlacesSuccess = (places) => {
  return {
    type: 'FETCH_PLACES_SUCCESS',
    payload: places,
  };
};

// const fetchPlaces = (query) => {
//     //https://developers.google.com/maps/documentation/places/web-service/autocomplete
//     //YOUR_GOOGLE_MAPS_API_KEY
//   const API_KEY = '849VCWC8+R9';//849VCWC8+R9 //849VCWC8%2BR9
//   const API_ENDPOINT = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${API_KEY}`;

//   return (dispatch) => {
//     axios.get(API_ENDPOINT)
//       .then((response) => {
//         dispatch(fetchPlacesSuccess(response.data.predictions));
//       })
//       .catch((error) => {
//         // Handle errors, dispatch an error action, etc.
//       });
//   };
// };

 const fetchPlaces = (query) => {
  return (dispatch) => {
    
    setTimeout(() => {
      const filteredResults = mockSearchResults.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(fetchPlacesSuccess(filteredResults));
    }, 1000); 
  };
};

export { fetchPlaces };
