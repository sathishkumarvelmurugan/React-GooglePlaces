// PlaceComponent.js
import React from 'react';
import { Input, List, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaces } from '../redux/actions/places';

const { Search } = Input;
const { Text } = Typography;

const PlaceComponent = () => {
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();

  const handleSearch = (value) => {
    if (value !== undefined || value !== null) {
      dispatch(fetchPlaces(value));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value !== undefined || value !== null) {
      dispatch(fetchPlaces(value));
    }
    
  };

  return (
    <div>
      <h1>Find the places </h1>
      <Search style={{ width: 600 }} placeholder="Search for places"  onChange={handleInputChange} onSearch={handleSearch} enterButton />
      <List
        dataSource={places}
        // renderItem={(place) => <List.Item><Text>{place.description}</Text></List.Item>}
        renderItem={(places) => <List.Item>{places}</List.Item>}
      />
    </div>
  );
};

export default PlaceComponent;
