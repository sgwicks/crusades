import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Castle from './Castle';
import Resource from './Resource';

const MainScreen = () => {
  const [troops] = useState(1000);
  const [wealth, setWealth] = useState(100);
  const [unrest] = useState(50);
  const [loyalty] = useState(75);
  const [turn, setTurn] = useState(0);
  const [wealthPerTurn] = useState(5);

  const handleTurn = () => {
    setTurn(turn + 1);
    setWealth(wealth + wealthPerTurn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.troops}>{troops}</Text>
      <Resource wealth={wealth} wealthPerTurn={wealthPerTurn} />
      <Castle turn={turn} handleTurn={handleTurn} />
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
    flexFlow: 'row wrap',
    textAlign: 'center'
  },
  troops: {
    backgroundColor: '#B54B19',
    color: '#e5dada',
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
  }
});

export default MainScreen;
