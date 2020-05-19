import React from 'react';
import { View, Text } from 'react-native';
import { Link } from '@reach/router';

const Event = () => {
  return (
    <View>
      <Text style={{ color: '#e5dada' }}>Event Text</Text>
      <Link to='/' style={{ color: '#e5dada' }}>
        Back to Castle
      </Link>
    </View>
  );
};

export default Event;
