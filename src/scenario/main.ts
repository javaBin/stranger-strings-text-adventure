import GameEngine from "../engine/GameEngine";
import Item from "../engine/Item";
import Location from "../engine/Location";
import castle from './img/castle';
import door from './img/halway';
import mountain from './img/mountain';
import {lostWoodsSection} from './sections/thelostwoods';

// ascii art taken from https://www.asciiart.eu/

// import image from './img/monster';


// all your bases belong to us
// the princess is in another castle
// tri force of java

const gameEngine = new GameEngine();

const l2 = new Location()
    .setId("An old, abandoned door")
    .setImg(door)
    .setDesc('The door is locked. The door is made out of metal. ' +
        'There is a broken key in the key hole. The door is welded shut. ' +
        'A wizard stands in your way and tells you "YOU SHALL NOT PASS". ' +
        'You see a path back. God himself recommends you to go back.');


// intro -> its a door leading into the castle shadowgate
const hungry = new Location()
    .setId("Castle Shadowgate") // fun fact: must have lit torch at all times in inventory
    .setImg(castle)
    .setDesc("A shadow grows on the wall behind you, swallowing you in darkness. Its almost here...");



const chest = new Item()
    .setLook(() => "Its an old chest. There is no lock on the chest. It should be easily opened.")
    .setUse(() => "Its open!")
    .setTake(() => "Its too heavy. You ain't Arnold Schwarzenegger.");
// see if id is the last word in string sendt in
// chest.on("open", (() => {l1.addItem("scroll", letter)}));

const l1 = new Location()
    .setId("A new beginning")
    .setDesc("You are standing in an old, abandoned house. There is nothing in the room expect a closed chest.")
    .setImg(mountain)
    .link("north", l2)
    .addItem("chest", chest)
    .link("hungry", hungry);


const lostWoods = lostWoodsSection(l1);

l1.link("wood", lostWoods)
    .link("woods", lostWoods)
    .link("to the woods", lostWoods)
    .link("to the lost woods", lostWoods)
    .link("the lost woods", lostWoods)
    .link("to the lost woods", lostWoods)
    .link("to lost woods", lostWoods)
    .link("lost woods", lostWoods)
    .link("forest", lostWoods);


lostWoods.link("back", l1);
lostWoods.link("main", l1);
lostWoods.link("main road", l1);
lostWoods.link("the main road", l1);
lostWoods.link("to the main road", l1);

l2.link("back", l1);

gameEngine.setStartLocation(l1);


export default gameEngine
