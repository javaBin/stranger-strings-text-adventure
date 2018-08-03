import {CommandType} from "./Command";
import {
    GameErrorEvent, GameEvent, HelpEvent, ItemEvent, LocationChangeEvent,
    NewInputEvent
} from "./Event";
import {GameError} from "./GameError";
import Location from "./Location";


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
        const cmd = CommandType.values.find((type) =>
            input.toLowerCase().startsWith(type.name.toLowerCase())
        );
        const rest = input.substr(!!cmd ? cmd.name.length + 1 : 0);

        this.events.push(new NewInputEvent(input));
        switch (cmd) {
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

            case CommandType.USE: {
                const maybeItem = this.currentLocation.items.get(rest.toLowerCase());
                if (maybeItem){
                    this.events.push(new ItemEvent(maybeItem.use()));
                } else {
                    this.events.push(new GameErrorEvent(GameError.NO_ITEM));
                }

                break
            }

            case CommandType.LOOK_AT: {
                const maybeItem = this.currentLocation.items.get(rest.toLowerCase());
                if (maybeItem){
                    this.events.push(new ItemEvent(maybeItem.look()));
                } else {
                    this.events.push(new GameErrorEvent(GameError.NO_ITEM));
                }

                break
            }

            case CommandType.LOOK: {
                this.events.push(
                    new LocationChangeEvent(
                        this.currentLocation.id,
                        this.currentLocation.description,
                        this.currentLocation.image)
                );
                break
            }

            case CommandType.HELP: {
                const commands = CommandType.values.map(type => type.name);
                this.events.push(new HelpEvent(commands));
                break
            }

            default: {
                // figure out if there is a custom cmd instead
                const itemName = Array.from(this.currentLocation.items.keys())
                    .find((item) => input.endsWith(item));
                const maybeItem = !!itemName ? this.currentLocation.items.get(itemName) : undefined;
                if(!!itemName && !!maybeItem){
                    const maybeCustomCmd = input.substr(0, input.length - (itemName.length + 1))
                    const maybeFunc = maybeItem.customCommands.get(maybeCustomCmd)
                    if (maybeFunc) {
                        this.events.push(new ItemEvent(maybeFunc()));

                    } else {
                        this.events.push(new GameErrorEvent(GameError.UNKNOWN_COMMAND));
                    }
                } else {
                    this.events.push(new GameErrorEvent(GameError.UNKNOWN_COMMAND));
                }
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
