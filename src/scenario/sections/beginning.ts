import Item from "../../engine/Item";
import Location from "../../engine/Location";
import mountain from "../img/mountain";


const start = new Location()
    .setId("A new beginning")
    .setDesc("You are standing in an old, abandoned house. " +
        "There is nothing in the room except for a closed chest.")
    .setImg(mountain);


let opened = false;

const openChest = () => {
    if (!opened){
        start.addItem("scroll", scroll);
        chest.setLook(() => "The chest is open. You can see a scroll inside");
        opened = true;
        return "You opened the chest. Inside there is a scroll."
    }

    return "The chest is already open"
};

const chest = new Item()
    .setLook(() => "It's an old chest. There is no lock on the chest. It should be easily opened.")
    .setUse(openChest)
    .setTake(() => "Its too heavy. You ain't Arnold Schwarzenegger.")
    .on("open", openChest);

start.addItem("chest", chest);


const letterText = "Welcome to QuestZone! \n" +
    "QuestZone is a game of adventure and low cunning. " +
    "In it you will explore some of the most amazing territory never seen by mortals. " +
    "Your task should you accept it is to find the legendary artifact. \n" +
    "Legend tells of one maven artifact to rule them all. " +
    "One artifact to find them, " +
    "One artifact to import them all and in the command line bind them. \n" +
    "FIND IT, SAVE US FROM THE EVIL MONOLITHIC EMPIRE !! TODO ADD MORE AFTER";

const letter = new Item()
    .setLook(() => "It's a letter. You can probably read it")
    .setTake(() => "You took the letter")
    .setUse(() => "You made a paper plane....\n That was fun. Lets continue the adventure")
    .on("read", () => letterText);

const scroll = new Item()
    .setLook(() => "It's an old scroll. Looks like you can read it.")
    .setTake(() => {
        chest.setLook(() => "The chest is open. You can see a letter inside.");
        start.addItem("letter", letter);
        return "You took the scroll! Something more is now visible in the chest"
    })
    .on("read", () => "To be GDPR compliant you herby accept all terms and conditions by taking this scroll!!\n" +
        "What this entails you will never know ¯\\_(ツ)_/¯")
;

export default start;


