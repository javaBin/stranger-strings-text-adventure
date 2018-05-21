import {Command, CommandType} from "./Command";
import {Error} from "./Error";
import {Event, EventType} from "./Event";
import Location from "./Location";

function getCmdType(cmd: string) {
    return CommandType[cmd];
}

class GameEngine {

    private currentLocation: Location;
    private events: Event[];

    constructor() {
        this.events = [];
    }

    public setStartLocation(location: Location): GameEngine {
        this.currentLocation = location;
        this.events.push(new Event(EventType.LOCATION_CHANGE, location));
        return this;
    }

    public getEvents(): Event[] {
        return this.events;
    }

    public send(maybeCmd: string){
        const words = maybeCmd.split(" ");
        const cmd = words.shift();
        const rest = words.join(" ");


        const cmdType: CommandType = getCmdType(cmd!.toUpperCase());

        this.events.push(new Event(EventType.NEW_COMMAND, new Command(cmdType, maybeCmd)));
        switch (cmdType) {
            case CommandType.GO: {
                const maybeNewLocation = this.currentLocation.locations[rest];
                if (maybeNewLocation) {
                    this.currentLocation = maybeNewLocation;
                    this.events.push(new Event(EventType.LOCATION_CHANGE, maybeNewLocation));
                } else {
                    this.events.push(
                        new Event(EventType.UNKNOWN,
                        new Error("There is no path there")));
                }
                break;
            }

            case CommandType.HELP: {
                const commands = CommandType.values.map(type => type.name);
                this.events.push(new Event(EventType.HELP, commands));
                break
            }

            default: {
                this.events.push(new Event(EventType.UNKNOWN,
                    new Error("Invalid input. For a list of available command, type HELP")));
                break
            }
        }


    }

}

export default GameEngine;
