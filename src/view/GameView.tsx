import * as React from 'react';
import {Command} from "../engine/Command";
import {Error} from '../engine/Error';
import {Event, EventType} from '../engine/Event';
import Location from '../engine/Location'
import CommandView from "./CommandView";
import ErrorView from "./ErrorView";
import HelpView from "./HelpView";
import LocationView from "./LocationView";

interface GameViewProps {
    events: Event[]
}


class GameView extends React.Component<GameViewProps, any> {
    private eventEnd: HTMLDivElement;

    constructor(props: any) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    public scrollToBottom() {
        this.eventEnd.scrollIntoView();
    }

    public componentDidMount() {
        this.scrollToBottom();
    }

    public componentDidUpdate() {
        this.scrollToBottom();
    }

    public render () {
        return (
            <div className="events-container">
            <div className="events">{
                this.props.events.map(event => {
                    switch (event.eventType) {
                        case EventType.NEW_COMMAND: {
                            const cmd: Command = event.props as Command;
                            return <CommandView orignalCommand={cmd.originalCommand} commandType={cmd.commandType}/>
                        }

                        case EventType.LOCATION_CHANGE: {
                            const location: Location = event.props as Location;
                            return <LocationView id={location.id}
                                                 description={location.description}
                                                 image={location.image}/>
                        }
                        case EventType.HELP: {
                            const availableCommands: string[] = event.props as string[];
                            return <HelpView visibleCommand={availableCommands}/>
                        }
                        case EventType.UNKNOWN: {
                            const error: Error = event.props as Error;
                            return <ErrorView error={error.error}/>
                        }
                    }
                })
            }
            <div style={{ float:"left", clear: "both" }}
                 ref={(el: HTMLDivElement) => { this.eventEnd = el; }}/>
            </div>
            </div>
        );
    }
}

export default GameView;
