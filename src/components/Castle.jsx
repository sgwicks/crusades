import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Castle = ({ turn, handleTurn }) => {
  return (
    <View style={styles.castle}>
      <Text style={{ color: '#e5dada' }}>Castleton</Text>
      <Text style={{ color: '#e5dada' }}>Turn {turn}/50</Text>
      <Text style={{ color: '#e5dada' }}>CASTLE_IMG.jpg</Text>
      <TouchableOpacity onPress={handleTurn}>Next Turn</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  castle: {
    width: '100%'
  }
});

export default Castle;
