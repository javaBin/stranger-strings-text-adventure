import * as React from 'react';
import {KeyboardEvent} from "react";
import {GameEvent} from "./engine/Event"
import GameScenario from './scenario/main';
import GameView from "./view/EventsView";

interface AppState {
    events: GameEvent[]
}

class Game extends React.Component<any, AppState> {
    private nameInput: HTMLInputElement;

    constructor(props: any) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {events: GameScenario.getEvents()};
    }

    public onBlur() {
        this.nameInput.focus()
    }

    public handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && this.nameInput.value.length !== 0) {
            GameScenario.send(this.nameInput.value);
            this.nameInput.value = "";
            this.setState({events: GameScenario.getEvents()});
        }
    }


    public render() {
        return (
            <div id="game">
                <GameView events={this.state.events}/>
                <span id="input">
                    >
                    <input id="input-element"
                           ref={(input: HTMLInputElement) => {
                               this.nameInput = input;
                           }}
                           autoFocus={true}
                           onBlur={this.onBlur}
                           onKeyPress={this.handleKeyPress}
                    />
                </span>
            </div>
        );
    }
}

export default Game;
