import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const EventFooter = ({ toggleModal }) => {
  return (
    <TouchableOpacity
      onPress={toggleModal}
      style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Text style={{ color: '#e5dada' }}>A new event!</Text>
    </TouchableOpacity>
  );
};

export default EventFooter;
