import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Event = ({ toggleModal, event_text, event_name, choices }) => {
  const handleChoice = (effects) => {
    toggleModal(effects);
  };

  return (
    <View style={styles.eventModal}>
      <Text style={{ color: '#e5dada' }}>{event_name}</Text>
      <Text style={{ color: '#e5dada' }}>{event_text}</Text>
      {choices.map((choice, i) => {
        return (
          <TouchableOpacity
            key={'choice' + i}
            onPress={() => handleChoice(choice.effects)}>
            <Text style={{ color: '#e5dada' }}>{choice.choice_name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  eventModal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Event;
