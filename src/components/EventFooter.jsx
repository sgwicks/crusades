import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const EventFooter = ({ toggleModal, event_name }) => {
  return (
    <TouchableOpacity onPress={toggleModal} style={styles.footer}>
      <Text style={styles.eventTitle}>Event</Text>
      <Text style={styles.eventText}>{event_name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginHorizontal: '5%',
    paddingBottom: '40px',
    paddingTop: '10px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    borderColor: 'rgba(229, 184, 110, 1)',
    borderWidth: 5,
    borderBottomWidth: 0,
    borderTopStyle: 'ridge',
    borderLeftStyle: 'ridge',
    borderRightStyle: 'groove',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  eventText: { color: '#e5dada' },
  eventTitle: { color: '#e5dada', paddingBottom: 5, fontSize: 24 }
});

export default EventFooter;
