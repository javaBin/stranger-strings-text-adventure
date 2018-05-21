import GameEngine from "../engine/GameEngine";
import Location from "../engine/Location";
import door from './img/halway';
import path from './img/path';

// ascii art taken from https://www.asciiart.eu/

// import image from './img/monster';


const gameEngine = new GameEngine();

const l2 = new Location()
    .setId("l1")
    .setImg(door)
    .setDesc("haha2323");


const l1 = new Location()
    .setId("l1")
    .setDesc("haha")
    .setImg(path)
    .link("north", l2);



gameEngine.setStartLocation(l1);


export default gameEngine