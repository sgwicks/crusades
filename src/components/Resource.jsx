import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resource = ({ wealth, wealthPerTurn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wealth}>
        <Text style={styles.wealthText}>
          {wealth} (+{wealthPerTurn})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center'
  },
  wealth: {
    width: '50%',
    paddingTop: '50%',
    backgroundColor: '#E59500',
    borderRadius: '50%',
    justifyContent: 'center',
    position: 'relative'
  },
  wealthText: {
    position: 'absolute',
    top: '45%',
    left: 0,
    bottom: 0,
    right: 0,
    color: '#02040F'
  }
});

export default Resource;
