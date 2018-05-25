import Location from "../../engine/Location";
import path from "../img/forest";

const goal = new Location()
    .setId("VICTORY")
    .setDesc("YOU FOUND THE SOLUTION");

const b = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 2 marked paths you can take: A, B");

const right2 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 2 marked paths you can take: A, B");

const left2 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");

const right1 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");

const left1 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");


const down2 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");


const down1 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");


const up2 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");


const up1 = new Location()
    .setId("The Lost Woods")
    .setDesc("You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, back, up, down.");


const startLocation = new Location()
    .setId("The Lost Woods")
    .setDesc(`You are at the entrance of the forest. 
        The forest seems big and it seems impossible to see the 
        difference between the different paths available.  
        You see 4 path into the forest: left, back, up, down.
        Or you can go back to the main road`
    )
    .setImg(path);


startLocation.link("left", startLocation)
    .link("right", startLocation)
    .link("down", startLocation)
    .link("up", up1);

up1.link("left", startLocation)
    .link("right", startLocation)
    .link("down", startLocation)
    .link("up", up2);

up2.link("left", startLocation)
    .link("right", startLocation)
    .link("down", down1)
    .link("up", startLocation);

down1.link("left", startLocation)
    .link("right", startLocation)
    .link("down", down2)
    .link("up", startLocation);

down2.link("left", left1)
    .link("right", startLocation)
    .link("down", startLocation)
    .link("up", startLocation);

left1.link("left", startLocation)
    .link("right", right1)
    .link("down", startLocation)
    .link("up", startLocation);

right1.link("left", left2)
    .link("right", startLocation)
    .link("down", startLocation)
    .link("up", startLocation);

left2.link("left", startLocation)
    .link("right", right2)
    .link("down", startLocation)
    .link("up", startLocation);

right2.link("a", startLocation)
    .link("b", b);

b.link("a", goal)
    .link("b", goal);


export default startLocation

