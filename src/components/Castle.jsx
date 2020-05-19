import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Castle = () => {
  return <Text style={styles.castle}>Castle</Text>;
};

const styles = StyleSheet.create({
  castle: {
    color: '#e5dada',
    width: '100%'
  }
});

export default Castle;
