import * as React from 'react';
import {GameEvent, GameEventType} from '../engine/Event';
import CommandView from "./CommandView";
import ErrorView from "./ErrorView";
import HelpView from "./HelpView";
import LocationView from "./LocationView";

interface EventsViewProps {
    events: GameEvent[]
}


class EventsView extends React.Component<EventsViewProps, any> {
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
                    switch (event.type) {
                        case GameEventType.NEW_INPUT: {
                            return <CommandView orignalCommand={event.input} />
                        }

                        case GameEventType.LOCATION_CHANGE: {
                            return <LocationView id={event.title}
                                                 description={event.description}
                                                 image={event.image}/>
                        }
                        case GameEventType.HELP: {
                            return <HelpView visibleCommand={event.avaibleCommands}/>
                        }
                        case GameEventType.ERROR: {
                            return <ErrorView error={event.errorType}/>
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

export default EventsView;
