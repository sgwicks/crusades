import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Resource = ({ resource, perTurn, resourceStyles }) => {
  const { color, backgroundColor } = resourceStyles;
  return (
    <View style={styles.container}>
      <View style={[styles.resource, { backgroundColor }]}>
        <Text style={[styles.resourceText, { color }]}>
          {resource} {perTurn && `(+${perTurn})`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 1,
    maxWidth: '25%',
    flex: 1,
    alignItems: 'center'
  },
  resource: {
    width: '100%',
    paddingTop: '100%',
    borderRadius: '50%',
    justifyContent: 'center',
    position: 'relative'
  },
  resourceText: {
    position: 'absolute',
    top: '45%',
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default Resource;
