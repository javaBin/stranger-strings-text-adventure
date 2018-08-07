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
    .setImgAlt("A image of an intersection in a desert")
    .link('west', castleShadowGate)
    .link('south', lostWoods)
    .link('north', door);

castleShadowGate
    .setId('Castle Shadowgate')
    .setImg(castle)
    .setImgAlt("A image of an ominous castle")
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


const riddle =
    "The lonely door is an illusion. Solve me to figure out a way through: \n" +
    "Voiceless it cries, " +
    "Wingless flutters, " +
    "Toothless bites, " +
    "Mouthless mutters. " +
    "\n What am I? Go with me through the door";

const poster = new Item()
    .setUse(() => riddle)
    .setTake(() => "It's stuck to the wall")
    .setLook(() => riddle);

insideCastle
    .setId("Inside the castle")
    .setImg(inside)
    .setImgAlt("Image of some halls inside the castle")
    .setDesc("The castle is big and ominous. But the only thing you find inside is a poster on the wall")
    .addItem("poster", poster);

torch.setUse(() => {
    if(gameEngine.currentLocation === castleShadowGate){
        return "It worked!! You can see a path through the main gates"
    }
    return "Can't use that here"
});

door.setId('The lonely door')
    .setImg(doorImg)
    .setImgAlt("Image of a door")
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


const punchCard = new Item()
    .setTake(() => "You took the punch card")
    .setTakeable(true)
    .setUse(() => "TODO YOUTUBE LINK")
    .setLook(() => "TODO YOUTUBE LINK");

james.setId('The architect named James')
    .setImg(gosling)
    .setImgAlt("A image of a strange old bold man")
    .setDesc("Congratulations! You have cleared the game. \n " +
        "Unfortunately there is no legendary artifact. We have tried to make it, but failed many times. " +
        "But there is a place of ultimate knowledge where monolithic architectures seems like a ting of the past " +
        "See you at JavaZone 2018 =) \n" +
        "He hands you a punch card")
    .addItem("punch card", punchCard);

startSection.link('hungry', castleShadowGate); // shortcut for redAnt


export default gameEngine;
