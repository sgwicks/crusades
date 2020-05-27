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
    zIndex: -100
  },
  background: {
    height: 320,
    width: 320,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -160
  }
});

export default Castle;
