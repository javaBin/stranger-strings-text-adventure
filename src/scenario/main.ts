import GameEngine from '../engine/GameEngine';
import Item from "../engine/Item";
import Location from '../engine/Location';
import castle from './img/castle';
import gosling from "./img/gosling";
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
const james = new Location();

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


const riddle = "Voiceless it cries, " +
    "Wingless flutters, " +
    "Toothless bites, " +
    "Mouthless mutters. " +
    "\n What am I?";

const poster = new Item()
    .setUse(() => riddle)
    .setTake(() => "It's stuck to the wall")
    .setLook(() => riddle);

insideCastle
    .setId("Innside the castle")
    .setImg(inside)
    .setDesc("You see a poster on the wall")
    .addItem("poster", poster);

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
    .link('back', intersection)
    .link('wind', james)
    .link('with the wind', james)
    .link('with wind', james);


new Item()
    .setTake(() => "You took the punchcard")
    .setTakeable(true)
    .setUse(() => "TODO YOUTUBE LINK")
    .setLook(() => "TODO YOUTUBE LINK");

james.setId('The architect named James')
    .setImg(gosling)
    .setDesc("Congratulations! You have cleared the game. \n " +
        "Unfortunately there is no legendary artifact. We have tried to make it, but failed many times. " +
        "But there is a place of ultimate knowledge where monolithic architectures seems like a ting of the past " +
        "See you at JavaZone 2018 =) \n" +
        "He hands you a punchcard");

startSection.link('hungry', castleShadowGate); // shortcut for redAnt


export default gameEngine;
