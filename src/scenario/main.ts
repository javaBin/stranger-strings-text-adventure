import GameEngine from '../engine/GameEngine';
import Item from "../engine/Item";
import Location from '../engine/Location';
import castle from './img/castle';
import gosling from "./img/gosling";
import doorImg from './img/halway';
import inside from "./img/inside";
import intersectionImg from './img/intersection';
import startSection from './sections/beginning';
import { final as goalLostWood, lostWoodsSection, torch } from './sections/thelostwoods';

// ascii art taken from https://www.asciiart.eu/


const gameEngine = new GameEngine();
gameEngine.setStartLocation(startSection);

const intersection = new Location();
const castleShadowGate = new Location();
const lostWoods = lostWoodsSection(intersection);
const door = new Location();
const insideCastle = new Location();
const james = new Location();


const startTime = new Date();
function timeDiffInSeconds(): number {
    return Math.floor((new Date().getTime() - startTime.getTime()) / 1000);
}

const gtag = (global as any).gtag as any;
gtag('event', 'start', {
    'event_category': 'game',
    'event_label': 'game',
    'value': 0
});


startSection.link('west', intersection);

intersection
    .setId('A fork in the road')
    .setDesc(
        'You arrive at an intersection. \n' +
            'To the west you see an ominous castle. ' +
            'To the south you see a beginning of a forest. ' +
            "There is also a path north, but you don't see what it leads to."
    )
    .setImg(intersectionImg)
    .setImgAlt("A image of an intersection in a desert")
    .link('west', castleShadowGate)
    .link('to castle', castleShadowGate)
    .link('castle', castleShadowGate)
    .link('south', lostWoods)
    .link('forest', lostWoods)
    .link('to forest', lostWoods)
    .link('north', door)
    .link("east", startSection)
    .setOnEnter(() => gtag('event', 'intersection', {
            'event_category': 'game',
            'event_label': 'game',
            'value': timeDiffInSeconds()
        })
    );

castleShadowGate
    .setId('Castle Shadowgate')
    .setImg(castle)
    .setImgAlt("A image of an ominous castle")
    .setDesc(
        'A shadow grows on the wall behind you, ' +
            "swallowing you in darkness. It's almost here...\n" +
            "It's too dark to continue without a light source. You need to go back."
    )
    .link('back', intersection)
    .link('east', intersection)
    .link("gates", insideCastle)
    .link("forward", insideCastle)
    .link("through gates", insideCastle)
    .link("gate", insideCastle)
    .link("through gate", insideCastle)
    .link("main gate", insideCastle)
    .link("main gates", insideCastle)
    .link("through main gates", insideCastle)
    .link("through the main gates", insideCastle)
    .link("through the main gate", insideCastle)
    .link("through main gate", insideCastle)
    .setOnEnter(() => gtag('event', 'castle shadowgate', {
        'event_category': 'game',
        'event_label': 'game',
        'value': timeDiffInSeconds()
    }));


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


lostWoods.setOnEnter(() => gtag('event', 'enter lost woods', {
    'event_category': 'game',
    'event_label': 'game',
    'value': timeDiffInSeconds()
}));

goalLostWood.setOnEnter(() => gtag('event', 'complete lost woods', {
    'event_category': 'game',
    'event_label': 'game',
    'value': timeDiffInSeconds()
}));

insideCastle
    .setId("Inside the castle")
    .setImg(inside)
    .setImgAlt("Image of some halls inside the castle")
    .setDesc("The castle is big and ominous. But the only thing of interest you could find was a poster. \n" +
        "Through the windows, you can see a path leading back from the casle. You recognise this path. It leads back to where you came from.")
    .addItem("poster", poster)
    .link("back", intersection)
    .link("intersection", intersection)
    .link("to intersection", intersection)
    .link("main", intersection)
    .link("main road", intersection)
    .link("castle", castleShadowGate)
    .link("outside", intersection)
    .setOnEnter(() => gtag('event', 'inside castle', {
        'event_category': 'game',
        'event_label': 'game',
        'value': timeDiffInSeconds()
    }));

torch.setUse(() => {
    if(gameEngine.currentLocation === castleShadowGate){
        castleShadowGate.setDesc("You can see a path forward through the main gates.");
        return "It worked!! You can see a path forward through the main gates."
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
    .link("south", intersection)
    .link('wind', james)
    .link('with the wind', james)
    .link('with wind', james)
    .setOnEnter(() => gtag('event', 'the lonely door', {
        'event_category': 'game',
        'event_label': 'game',
        'value': timeDiffInSeconds()
    }));


const jamesSays = "Congratulations! You have cleared the game. \n " +
    "James: Unfortunately, there is no legendary artifact. We have tried to create it, but failed. Many times. " +
    "However, there is a place of ultimate knowledge, where monolithic architectures seem like a ting of the past. " +
    "See you at JavaZone 2018!";

const punchCardStr = "\n He hands you a punch card.";

const punchCard = new Item()
    .setTake(() => {
        james.setDesc(jamesSays);
        return "You took the punch card."
    })
    .setTakeable(true)
    .setUse(() => "https://www.youtube.com/watch?v=dQw4w9WgXcQ") // TODO change me
    .setLook(() => "https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // TODO change me

james.setId('The architect named James')
    .setImg(gosling)
    .setImgAlt("A image of a strange old bold man")
    .setDesc(jamesSays + punchCardStr)
    .addItem("punch card", punchCard)
    .setOnEnter(() => gtag('event', 'james', {
        'event_category': 'game',
        'event_label': 'game',
        'value': timeDiffInSeconds()
    }));

startSection.link('hungry', castleShadowGate); // shortcut for redAnt


export default gameEngine;
