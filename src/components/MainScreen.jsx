import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
      <Resource
        resource={troops}
        resourceStyles={{ backgroundColor: '#B54B19', color: '#e5dada' }}
      />
      <Resource
        resource={wealth}
        perTurn={wealthPerTurn}
        resourceStyles={{ backgroundColor: '#E59500' }}
      />
      <Castle turn={turn} handleTurn={handleTurn} />
      <Resource
        resource={unrest}
        resourceStyles={{ backgroundColor: '#02040F', color: '#e5dada' }}
      />
      <Resource
        resource={loyalty}
        resourceStyles={{ backgroundColor: '#840032', color: '#e5dada' }}
      />
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
  }
});

export default MainScreen;
