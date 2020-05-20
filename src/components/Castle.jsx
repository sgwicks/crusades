import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import castleImage from '../images/Castle.png';

const Castle = ({ turn, handleTurn }) => {
  return (
    <View style={styles.castle}>
      <ImageBackground source={castleImage} style={styles.background}>
        <Text style={{ color: '#e5dada' }}>Castleton</Text>
        <Text style={{ color: '#e5dada' }}>Turn {turn}/50</Text>
        <TouchableOpacity onPress={handleTurn}>
          <Text style={{ color: '#e5dada' }}>Next Turn</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  castle: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  background: {
    height: 370,
    width: 370,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Castle;
