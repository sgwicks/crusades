import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resource = ({ resource, perTurn, backgroundColor }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.resource, { backgroundColor }]}>
        <Text style={styles.resourceText}>
          {resource} {perTurn && `(+${perTurn})`}
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
  resource: {
    width: '50%',
    paddingTop: '50%',
    borderRadius: '50%',
    justifyContent: 'center',
    position: 'relative'
  },
  resourceText: {
    position: 'absolute',
    top: '45%',
    left: 0,
    bottom: 0,
    right: 0,
    color: '#02040F'
  }
});

export default Resource;
