import GameEngine from "../engine/GameEngine";
import Location from "../engine/Location";
import door from './img/halway';
import image from './img/monster';


const gameEngine = new GameEngine();

const l2 = new Location()
    .setId("l1")
    .setImg(door)
    .setDesc("haha2323");


const l1 = new Location()
    .setId("l1")
    .setDesc("haha")
    .setImg(image)
    .link("north", l2);



gameEngine.setStartLocation(l1);


export default gameEngine