import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002642'
  },
  text: {
    color: '#e5dada'
  }
});

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Troops</Text>
      <Text style={styles.text}>Wealth</Text>
      <Text style={styles.text}>Castle</Text>
      <Text style={styles.text}>Unrest</Text>
      <Text style={styles.text}>Loyalty</Text>
    </View>
  );
};

export default MainScreen;
