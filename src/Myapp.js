import React, { useState } from 'react';
import Container from './Container';
import List from './List';
import Selector from './Selector';

const App = () => {
  const [selectedList, setSelectedList] = useState(null);

  const equipments = [
    { label: 'Audio Production', items: ['Microphones', 'Field Recorder', 'Headphone Splitters'] },
    { label: 'Camera', items: ['Digital Cinema', 'Camcorder', 'Action Camera'] },
    { label: 'Lighting', items: ['fluorescent', 'LED', 'Reflector'] },
  ];

  const handleSelect = (option) => {
    setSelectedList(option);
  };

  return (
    <Container>
      <Selector options={ equipments } onSelect={ handleSelect } />
      { selectedList && <List items={ selectedList.items } /> }
    <Container/>
  );
};

export default App;
