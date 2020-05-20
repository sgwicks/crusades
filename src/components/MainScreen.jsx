import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Router } from '@reach/router';
import Castle from './Castle';
import Resource from './Resource';
import Event from './Event';
import EventFooter from './EventFooter';

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
      <Router style={{ width: '100%', alignSelf: 'stretch' }}>
        <Castle turn={turn} handleTurn={handleTurn} path='/' />
        <Event path='/event' />
      </Router>

      <Resource
        resource={unrest}
        resourceStyles={{ backgroundColor: '#02040F', color: '#e5dada' }}
      />
      <Resource
        resource={loyalty}
        resourceStyles={{ backgroundColor: '#840032', color: '#e5dada' }}
      />
      <EventFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002642',
    height: '100%',
    width: '100%',
    maxWidth: '100vh',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'stretch',
    alignItems: 'center',
    flexFlow: 'row wrap'
  }
});

export default MainScreen;
