import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Castle = ({ turn }) => {
  return (
    <View style={styles.castle}>
      <Text style={{ color: '#e5dada' }}>Castleton</Text>
      <Text style={{ color: '#e5dada' }}>Turn {turn}/50</Text>
      <Text style={{ color: '#e5dada' }}>CASTLE_IMG.jpg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  castle: {
    width: '100%'
  }
});

export default Castle;
