import GameEngine from "../engine/GameEngine";
import Location from "../engine/Location";
import door from './img/halway';
import path from './img/path';
import lostWoods from './sections/thelostwoods'

// ascii art taken from https://www.asciiart.eu/

// import image from './img/monster';


// all your bases belongs to use
// the princess is in another castle

// tri force of java

const gameEngine = new GameEngine();

const l2 = new Location()
    .setId("l1")
    .setImg(door)
    .setDesc("haha2323");


const l1 = new Location()
    .setId("A new beginning")
    .setDesc("You see a path north and a path to the lost woods")
    .setImg(path)
    .link("north", l2)
    .link("wood", lostWoods)
    .link("woods", lostWoods)
    .link("to the lost woods", lostWoods)
    .link("the lost woods", lostWoods)
    .link("lost woods", lostWoods)
    .link("woods", lostWoods)
    .link("forest", lostWoods);


lostWoods.link("back", l1);
lostWoods.link("main", l1);
lostWoods.link("main road", l1);
lostWoods.link("the main road", l1);
lostWoods.link("to the main road", l1);
gameEngine.setStartLocation(l1);


export default gameEngine