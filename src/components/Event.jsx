import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Event = ({ toggleModal, event_text, event_name, choices }) => {
  const handleChoice = (effects) => {
    toggleModal(effects);
  };

  return (
    <View style={styles.eventModal}>
      <View style={styles.eventTextWrapper}>
        <Text style={styles.eventText}>{event_text}</Text>
      </View>
      <View style={styles.eventChoiceWrapper}>
        {choices.map((choice, i) => {
          return (
            <TouchableOpacity
              key={'choice' + i}
              onPress={() => handleChoice(choice.effects)}>
              <Text style={styles.eventChoice}>{choice.choice_name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventModal: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'fixed',
    height: '100vh',
    width: '100%',
    top: 0,
    left: 0,
    alignItems: 'center',
    flexFlow: 'column',
    textAlign: 'center'
  },
  eventName: {
    color: '#e5dada',
    backgroundColor: 'rgba(1, 11, 28, 1)',
    padding: 10,
    borderColor: 'rgba(229, 184, 110, 1)',
    borderTopWidth: 5,
    borderStyle: 'ridge',
    borderBottomWidth: 5,
    zIndex: -1
  },
  eventText: {
    color: '#e5dada',
    height: '30vh',
    width: '100vh',
    backgroundColor: 'rgba(1, 11, 28, 0.8)',
    padding: 10,
    borderColor: 'rgba(229, 184, 110, 1)',
    borderTopWidth: 5,
    borderStyle: 'ridge',
    borderBottomWidth: 5,
    zIndex: -1
  },
  eventTextWrapper: {
    flex: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  eventChoice: { color: '#e5dada' },
  eventChoiceWrapper: {
    flex: 2,
    width: '100vh',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexFlow: 'row wrap'
  }
});

export default Event;
