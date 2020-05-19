import React from 'react';
import { View } from 'react-native';
import { Link } from '@reach/router';

const EventFooter = () => {
  return (
    <View
      style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Link to='/event' style={{ color: 'white' }}>
        A new event!
      </Link>
    </View>
  );
};

export default EventFooter;
