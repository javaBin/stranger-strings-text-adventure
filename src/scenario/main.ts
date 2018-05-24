import GameEngine from "../engine/GameEngine";
import Location from "../engine/Location";
import path from './img/forest';
import door from './img/halway';

// ascii art taken from https://www.asciiart.eu/

// import image from './img/monster';


// all your bases belongs to use
// the princess is in another castle
// konami kode

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