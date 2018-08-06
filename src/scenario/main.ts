import GameEngine from '../engine/GameEngine';
import Location from '../engine/Location';
import castle from './img/castle';
import doorImg from './img/halway';
import inside from "./img/inside";
import intersectionImg from './img/intersection';
import startSection from './sections/beginning';
import { lostWoodsSection, torch } from './sections/thelostwoods';

// ascii art taken from https://www.asciiart.eu/
const gameEngine = new GameEngine();
gameEngine.setStartLocation(startSection);

const intersection = new Location();
const castleShadowGate = new Location();
const lostWoods = lostWoodsSection(intersection);
const door = new Location();
const insideCastle = new Location();

startSection.link('west', intersection);

intersection
    .setId('A fork in the road')
    .setDesc(
        'You arrive at an intersection. \n' +
            'To the west you see an ominous castle. ' +
            'To the south you see an beginning of a forest. ' +
            "There is also a path north, but you don't see what it leads to."
    )
    .setImg(intersectionImg)
    .link('west', castleShadowGate)
    .link('south', lostWoods)
    .link('north', door);

castleShadowGate
    .setId('Castle Shadowgate')
    .setImg(castle)
    .setDesc(
        'A shadow grows on the wall behind you, ' +
            "swallowing you in darkness. It's almost here...\n" +
            "It's to dark to continue. You need to go back"
    )
    .link('back', intersection)
    .link("main gate", insideCastle)
    .link("main gates", insideCastle)
    .link("through main gates", insideCastle)
    .link("through main gate", insideCastle);

insideCastle
    .setId("Innside the castle")
    .setImg(inside)
    .setDesc("TODO");


torch.setUse(() => {
    if(gameEngine.currentLocation === castleShadowGate){
        return "It worked!! You can see a path through the main gates"
    }
    return "Can't use that here"
});

door.setId('An old, abandoned door')
    .setImg(doorImg)
    .setDesc(
        'The door is locked. The door is made out of metal. ' +
            'There is a broken key in the keyhole. The door is welded shut. ' +
            'A wizard stands in your way and tells you "YOU SHALL NOT PASS". ' +
            'You only see a path back.'
    )
    .link('back', intersection);

startSection.link('hungry', castleShadowGate); // shortcut for redAnt


export default gameEngine;
