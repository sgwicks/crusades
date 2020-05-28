import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import castleImage from '../images/Castle.png';

const Castle = ({ turn }) => {
  return (
    <View style={styles.castle}>
      <ImageBackground source={castleImage} style={styles.background}>
        <Text style={{ color: '#e5dada' }}>Turn {turn}/50</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  castle: {
    alignItems: 'center',
    position: 'relative',
    height: '30vh',
    zIndex: -100
  },
  background: {
    height: '50vh',
    width: '50vh',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-10vh'
  }
});

export default Castle;
