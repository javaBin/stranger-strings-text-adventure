export enum EventType {
    LOCATION_CHANGE,
    NEW_COMMAND,
    UNKNOWN
}

export class Event {
    public eventType: EventType;
    public props: any;

    constructor(eventType: EventType, props: any) {
        this.eventType = eventType;
        this.props = props;
    }

}