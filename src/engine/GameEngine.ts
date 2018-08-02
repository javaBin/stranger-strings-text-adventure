import {CommandType} from "./Command";
import {
    GameErrorEvent, GameEvent, HelpEvent, ItemEvent, LocationChangeEvent,
    NewInputEvent
} from "./Event";
import {GameError} from "./GameError";
import Location from "./Location";

function getCmdType(cmd: string) {
    return CommandType[cmd];
}

class GameEngine {

    private currentLocation: Location;
    private events: GameEvent[];

    constructor() {
        this.events = [];
    }

    public setStartLocation(location: Location): GameEngine {
        this.changeLocation(location);
        return this;
    }

    public getEvents(): GameEvent[] {
        return this.events;
    }

    public send(input: string){
        const words = input.split(" ");
        const cmd = words.shift();
        const rest = words.join(" ");

        const cmdType: CommandType = getCmdType(cmd!.toUpperCase());

        this.events.push(new NewInputEvent(input));
        switch (cmdType) {
            case CommandType.GO: {
                const maybeNewLocation = this.currentLocation.locations[rest.toLowerCase()];
                if (maybeNewLocation) {
                    this.changeLocation(maybeNewLocation);
                } else {
                    this.events.push(new GameErrorEvent(GameError.INVALID_PATH));
                }
                break;
            }

            case CommandType.TAKE: {
                // todo inventory
                const maybeItem = this.currentLocation.items.get(rest.toLowerCase());
                if (maybeItem){
                    this.events.push(new ItemEvent(maybeItem.take()));
                } else {
                    this.events.push(new GameErrorEvent(GameError.NO_ITEM));
                }

                break

            }

            case CommandType.HELP: {
                const commands = CommandType.values.map(type => type.name);
                this.events.push(new HelpEvent(commands));
                break
            }

            default: {
                this.events.push(new GameErrorEvent(GameError.UNKNOWN_COMMAND));
                break
            }
        }


    }

    private changeLocation(location: Location): GameEngine {
        this.currentLocation = location;
        this.events.push(
            new LocationChangeEvent(
                location.id,
                location.description,
                location.image)
        );
        return this;
    }

}

export default GameEngine;
