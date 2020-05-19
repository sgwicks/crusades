import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => {
  const [troops] = useState(1000);
  const [wealth] = useState(100);
  const [unrest] = useState(50);
  const [loyalty] = useState(75);

  return (
    <View style={styles.container}>
      <Text style={styles.troops}>{troops}</Text>
      <Text style={styles.wealth}>{wealth}</Text>
      <Text style={styles.castle}>Castle</Text>
      <Text style={styles.unrest}>{unrest}</Text>
      <Text style={styles.loyalty}>{loyalty}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002642',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexFlow: 'row wrap'
  },
  troops: {
    backgroundColor: '#B54B19',
    color: '#e5dada',
    width: '50%'
  },
  wealth: {
    backgroundColor: '#E59500',
    color: '#02040F',
    width: '50%'
  },
  unrest: {
    backgroundColor: '#02040F',
    color: '#e5dada',
    width: '50%'
  },
  loyalty: {
    backgroundColor: '#840032',
    color: '#e5dada',
    width: '50%'
  },
  castle: {
    color: '#e5dada',
    width: '100%',
    textAlign: 'center'
  }
});

export default MainScreen;