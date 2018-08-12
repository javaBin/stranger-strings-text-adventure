import Item from "../../engine/Item";
import Location from "../../engine/Location";
import mountain from "../img/mountain";


const start = new Location()
    .setId("A new beginning")
    .setDesc("You are standing in an old, abandoned house. " +
        "There is nothing in the room except for a closed chest.")
    .setImgAlt("Image of a house on the mountains")
    .setImg(mountain);


let opened = false;

const openChest = () => {
    if (!opened){
        start.addItem("scroll", scroll);
        chest.setLook(() => "The chest is open. You can see a scroll inside.");
        start.setDesc("You are standing in an old, abandoned house. " +
        "There is nothing in the room except for a open chest.");
        opened = true;
        return "You opened the chest. Inside there is a scroll."
    }

    return "The chest is already open"
};

const chest = new Item()
    .setLook(() => "It's an old chest. There is no lock on the chest. It should be easy to open it.")
    .setUse(openChest)
    .setTake(() => "It's too heavy. You ain't Arnold Schwarzenegger.")
    .on("open", openChest);

start.addItem("chest", chest);


const letterText = "Welcome to QuestZone! \n" +
    "QuestZone is a game of adventure, danger, and low cunning. " +
    "In it, you will explore some of the most amazing territory ever seen by mortals. " +
    "No computer should be without one. " +
    "Your mission, should you choose to accept it, is to find the legendary artifact. \n" +
    "Legend tells of one Maven artifact to rule them all. " +
    "One artifact to find them, " +
    "one artifact to import them all and in the command line bind them. \n" +
    "FIND IT! SAVE US FROM THE EVIL MONOLITHIC EMPIRE!! \n" +
    "Go west to continue your adventure.";

const letter = new Item()
    .setLook(() => "It's a letter. You can probably read it.")
    .setTake(() => {
        chest.setLook(() => "The chest is empty.");
        return "You took the letter."
    })
    .setTakeable(true)
    .setUse(() => "You made a paper plane...\n That was fun. Let's continue the adventure.")
    .on("read", () => letterText);

const scroll = new Item()
    .setLook(() => "It's an old scroll. Looks like you can read it.")
    .setTake(() => {
        chest.setLook(() => "The chest is open. You can see a letter inside.");
        start.addItem("letter", letter);
        return "You took the scroll! You can now see something else in the chest."
    })
    .setTakeable(true)
    .setUse(() => "You made an origami figure...\n That was fun. Maybe you should read it?")
    .on("read", () => "To be GDPR compliant you hereby accept all terms and conditions by TAKING this scroll!!\n" +
        "What this entails you will never know ¯\\_(ツ)_/¯")
;

export default start;


