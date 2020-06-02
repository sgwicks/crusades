# Crusades

Crusades is an event-driven strategy/storytelling game, inspired by the likes of Crusader Kings and Reigns. It follows the reign of a single monarch, attempting to build their country's treasury and army in preparation for a glorious Crusade, while still balancing the everyday needs of the realm, the unrest of the common people and the loyalty of the realm's most powerful nobility. 

## Vision

Crusades is attempting to be a somewhat cynical, somewhat comedic view on historical events, dispensing with all the glorification of the Crusades to look instead at what rulers of the time might have actually had to contend with: a populace who were perhaps more focused on their own problems, a ruling elite more interested in progressing their own personal power than the moral philosophy of a religious war, and most importantly, the relative powerlessness of a ruler compared to the strategy games commonly set in this era. The goal of Crusades is not to be a military genius, or even really to go on Crusade; it is to manage your realm effectively enough that you might be able to leave it for a few years and not come back to a smouldering ruin.

I have tried my best, and as long as I work on this project will continue to try my best, to build this game through a modern lens of social justice. I have avoided using gendered language, which has also allowed me to avoid default sexualities. Although nominally about the crusades, I have attempted to avoid any particularities of religion or race, and especially the glorification of ideas of racial or cultural superiority. Even tongue-in-cheek, I believe these representations do more harm than good.

In terms of 'historical accuracy', this game is clearly comedic, and so ideas of total historical accuracy are not to be expected. That said, where it has been attempted, I've chosen to focus on how we might imagine individuals to have thought, felt and behaved, rather than on how they chose to be portrayed in their own biased accounts, or the biased accounts of later chroniclers and historians. I've also left it fuzzy enough around the edges that if you choose to use your imagination to fill in the blanks, this should remain a 'historically accurate' game, whatever that means for you. 

I welcome questions and suggestions for how to make any event better, especially in regard to what is laid out here.

## Installing

Crusades uses React 16.13.1, and react-native-web 0.12.2.

Using npm and git to install:

```bash
git clone https://github.com/sgwicks/crusades.git
cd crusades
npm install
npm start
```

React is still set to default to localhose:3000, so make sure you don't have anything running on that port which will clash, or alter the port.

## Playing

Currently the only way to play is on your local machine (see installation above). Once the game is more fleshed out, I intend to find a hosting solution. If you do choose to install and play locally:

### Resources

The game revolves around balancing your four resources:

- Troops (in orange, top left)
- Wealth (in yellow, top right)
- Unrest (in black, bottom left)
- Loyalty (in purple, bottom right)

Events will cause these numbers to rise and fall, often in relation to one another. Ideally you want high wealth, troops and loyalty, but low unrest.

Some events will only occur if you have high or low resources.

Currently resources have no cap at either end.

### Events

Each turn, you will be served a new event, which you can access by clicking in the event footer. Each event will have some descriptive text, and one or more options to choose from.

Click an option to choose it, and you will see descriptive text that describes the outcome. Click "Ok" at the bottom to enact the effects and return to the main castle screen.

Once an event has been resolved, it can't be resolved again. Clicking the footer will allow you to remind yourself of the choice you made, but otherwise will have no further effect.

### Next Turn

Once you've played through an event, you can click the "Next Turn" button to advance the turn counter and receive a new event.

Each turn, wealth will also increase by the wealth per turn amount (indicated in brackets beside the total wealth).

Currently their are no game-end conditions, no turn limits, no victory and no defeat. 

## Roadmap

Obviously, this is very much a work in progress, and more a proof of concept than a fully fleshed out game. However, I intend to continue working on it over time, as long as I have the time, and here are just a few things I intend to include:

- Game end conditions:
    - Max turn limit (crusade launched);
    - Monarch overthrown (high unrest/low loyalty);
    - Score;
- Resource caps: 
    - Min wealth of 0, or debt events at negative wealth;
    - Min troops of 0;
    - Min/max unrest of 0/100;
    - Min/max loyalty of 0/100;
    - Event choices limited based on resources (i.e. can't choose to lose more than you have);
- Crucial events at resource caps:
    - Debt at zero or negative wealth;
    - Revolution at high unrest;
    - Revolution at low loyalty;
- Event flags and event chains:
    - Diplomacy and war;
    - Recurring characters;
    - Revolutions;
    - Plots;
- More events (always more events)