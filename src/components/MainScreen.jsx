import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { View, StyleSheet } from 'react-native';
import Castle from './Castle';
import Resource from './Resource';
import Event from './Event';
import EventFooter from './EventFooter';
import events from '../events/events.json';
import { evaluateConditions } from '../utils/utils';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(children, document.getElementById('modal'));
};

const MainScreen = () => {
  const [troops, setTroops] = useState(1000);
  const [wealth, setWealth] = useState(25);
  const [unrest, setUnrest] = useState(50);
  const [loyalty, setLoyalty] = useState(75);
  const [turn, setTurn] = useState(0);
  const [wealthPerTurn] = useState(5);
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState(events.e_002);

  const { events_list } = events;

  const handleTurn = () => {
    // Checks all event conditions against current resources
    const filterEvents = events_list.filter((event_id) => {
      const { conditions } = events[event_id];
      const values = { troops, wealth, unrest, loyalty };
      return evaluateConditions(conditions, values);
    });

    // Chooses a random event from the filtered down list
    const nextEvent =
      filterEvents[Math.floor(Math.random() * filterEvents.length)];

    setTurn(turn + 1);
    setWealth(wealth + wealthPerTurn);
    setEvent(events[nextEvent]);
  };

  const toggleModal = (effects) => {
    const { addWealth, addTroops, addUnrest, addLoyalty } = effects;
    if (modal) {
      if (addWealth) setWealth(wealth + addWealth);
      if (addTroops) setTroops(troops + addTroops);
      if (addUnrest) setUnrest(unrest + addUnrest);
      if (addLoyalty) setLoyalty(loyalty + addLoyalty);
      setEvent({
        ...event,
        choices: [{ choice_name: 'Back to Castle', effects: {} }]
      });
    }
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <Resource
        resource={troops}
        resourceStyles={{ backgroundColor: '#B54B19', color: '#e5dada' }}
      />
      <Resource
        resource={wealth}
        perTurn={wealthPerTurn}
        resourceStyles={{ backgroundColor: '#E59500' }}
      />
      <Castle turn={turn} handleTurn={handleTurn} path='/' />
      {modal && (
        <Modal>
          <Event toggleModal={toggleModal} {...event} />
        </Modal>
      )}
      <Resource
        resource={unrest}
        resourceStyles={{ backgroundColor: '#02040F', color: '#e5dada' }}
      />
      <Resource
        resource={loyalty}
        resourceStyles={{ backgroundColor: '#840032', color: '#e5dada' }}
      />
      <EventFooter toggleModal={toggleModal} {...event} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002642',
    height: '100%',
    width: '100%',
    maxWidth: '100vh',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'stretch',
    alignItems: 'center',
    flexFlow: 'row wrap'
  }
});

export default MainScreen;
