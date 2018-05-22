import {GameError} from "./GameError";

export enum GameEventType {
    LOCATION_CHANGE,
    NEW_INPUT,
    HELP,
    ERROR
}

export class LocationChangeEvent {
    public readonly type = GameEventType.LOCATION_CHANGE;
    public constructor(public title: string,
                       public description: string,
                       public image?: string) {}
}

export class HelpEvent {
    public readonly type = GameEventType.HELP;
    public constructor(public avaibleCommands: string[]) {}
}

export class NewInputEvent {
    public readonly type = GameEventType.NEW_INPUT;
    public constructor(public input: string) {}
}

export class GameErrorEvent {
    public readonly type = GameEventType.ERROR;
    public constructor(public errorType: GameError){}
}

export type GameEvent = LocationChangeEvent | HelpEvent | NewInputEvent | GameErrorEvent;