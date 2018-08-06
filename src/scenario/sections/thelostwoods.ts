import Item from "../../engine/Item";
import Location from "../../engine/Location";
import path from "../img/forest";


export const torch = new Item()
    .setTake(() => "You took the torch")
    .setUse(() => "TODO")
    .setLook(() => "It looks like a torch. You can probably use it to lighten a dark place")
    .setTakeable(true);

const final = new Location()
    .setId("Outside the forest")
    .setDesc("VICTORY!!!\n" +
        "You finally arrive in a open field outside the forest. " +
        "You see a torch lying on the ground. \n" +
        "You see a path back out of the forest")
    .addItem("torch", torch);

const b = new Location()
    .setId("¯\\_(ツ)_/¯ deeper in the forest")
    .setDesc("You went to B. You arrive at an intersection in the forest." +
        " You see 2 marked paths you can take: A, B");

const right2 = new Location()
    .setId("I don't know any more adverbs deep in the forest")
    .setDesc("You went right. You arrive at an intersection in the forest." +
        " You see 2 marked paths you can take: A, B");

const left2 = new Location()
    .setId("Almost at the end deep in the woods")
    .setDesc("You went left. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");

const right1 = new Location()
    .setId("Unfathomable deep in the woods")
    .setDesc("You went right. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");

const left1 = new Location()
    .setId("Really deep in the woods")
    .setDesc("You went left. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");

const down2 = new Location()
    .setId("Very deep in the woods")
    .setDesc("You went down. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");


const down1 = new Location()
    .setId("Deeper x 3 in the woods")
    .setDesc("You went down. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");


const up2 = new Location()
    .setId("Deeper deeper in the woods")
    .setDesc("You went up. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");


const up1 = new Location()
    .setId("Deeper in the woods")
    .setDesc("You went up. You arrive at an intersection in the forest." +
        " You see 4 path different paths you can take: left, right, up, down.");


const startLocation = new Location()
    .setId("The Lost Woods")
    .setDesc("You are at the entrance of the forest. " +
        "The forest seems big and impossible to pass through. " +
        "There is a sign at the entrance: Only the truly observant may pass. \n" +
        "You see 4 paths into the forest: left, right, up, down. " +
        "Or you can go back"
    )
    .setImg(path);

const backAtStartLocation = new Location()
    .setId("The Lost Woods")
    .setDesc("You got lost. But it seems your are back at the main entrance of the forest. " +
        "You see 4 paths into the forest: left, right, up, down. " +
        "Or you can go back"
    )
    .setImg(path);


startLocation.link("left", backAtStartLocation)
    .link("right", backAtStartLocation)
    .link("down", backAtStartLocation)
    .link("up", up1)
    .link("shortcut", final);

backAtStartLocation.link("left", backAtStartLocation)
    .link("right", backAtStartLocation)
    .link("down", backAtStartLocation)
    .link("up", up1);


up1.link("left", backAtStartLocation)
    .link("right", backAtStartLocation)
    .link("down", backAtStartLocation)
    .link("up", up2);

up2.link("left", backAtStartLocation)
    .link("right", backAtStartLocation)
    .link("down", down1)
    .link("up", backAtStartLocation);

down1.link("left", backAtStartLocation)
    .link("right", backAtStartLocation)
    .link("down", down2)
    .link("up", backAtStartLocation);

down2.link("left", left1)
    .link("right", backAtStartLocation)
    .link("down", backAtStartLocation)
    .link("up", backAtStartLocation);

left1.link("left", backAtStartLocation)
    .link("right", right1)
    .link("down", backAtStartLocation)
    .link("up", backAtStartLocation);

right1.link("left", left2)
    .link("right", backAtStartLocation)
    .link("down", backAtStartLocation)
    .link("up", backAtStartLocation);

left2.link("left", backAtStartLocation)
    .link("right", right2)
    .link("down", backAtStartLocation)
    .link("up", backAtStartLocation);

right2.link("a", backAtStartLocation)
    .link("b", b);

b.link("a", final)
    .link("b", final);


export function lostWoodsSection(backLocation: Location){
    backAtStartLocation.link("back", backLocation);
    startLocation.link("back", backLocation);
    final.link("back", backLocation);

    return startLocation
}
