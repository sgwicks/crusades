import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Event = ({ toggleModal, event_text, choices }) => {
  const [text, setText] = useState('');
  const [buttons, setButtons] = useState([]);
  const [hasChosen, toggleHasChosen] = useState(false);

  useEffect(() => {
    setText(event_text);
    setButtons(choices);
    if (choices[0].choice_name === 'Back to Castle') toggleHasChosen(true);
  }, [event_text, choices]);

  const handleChoice = (choice) => {
    const { choice_text } = choice;
    const choiceText = choice_text ? choice_text : `You chose: ${choice.choice_name}`;
    setText(choiceText);
    setButtons([{ ...choice, choice_name: 'Ok' }]);
    toggleHasChosen(true);
  };

  const exitEvent = (choice, text) => {
    toggleModal(choice, text);
  };

  return (
    <View style={styles.eventModal}>
      <View style={styles.eventTextWrapper}>
        <Text style={styles.eventText}>{text}</Text>
      </View>
      <View style={styles.eventChoiceWrapper}>
        {buttons.map((choice, i) => {
          return (
            <TouchableOpacity
              key={'choice' + i}
              onPress={() =>
                hasChosen ? exitEvent(choice, text) : handleChoice(choice)
              }
              style={styles.eventChoiceButton}>
              <Text style={styles.eventChoiceText}>{choice.choice_name}</Text>
              {Object.keys(choice.effects).map((effect) => {
                return (
                  <Text key={choice + effect} style={styles.eventChoiceText}>
                    {effect}: {choice.effects[effect]}
                  </Text>
                );
              })}
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
    maxWidth: '100%',
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
  eventChoiceText: { color: '#e5dada' },
  eventChoiceWrapper: {
    flex: 2,
    width: '90vh',
    maxWidth: '100%',
    justifyContent: 'space-around',
    flexFlow: 'row',
    marginHorizontal: '5%',
    paddingTop: '10px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    borderColor: 'rgba(229, 184, 110, 1)',
    borderWidth: 5,
    borderBottomWidth: 0,
    borderTopStyle: 'ridge',
    borderLeftStyle: 'ridge',
    borderRightStyle: 'groove',
    backgroundColor: 'rgba(1, 11, 28, 1)'
  },
  eventChoiceButton: {
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    borderColor: 'rgba(229, 184, 110, 1)',
    borderWidth: 5,
    borderBottomWidth: 0,
    borderTopStyle: 'ridge',
    borderLeftStyle: 'ridge',
    borderRightStyle: 'groove',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Event;
