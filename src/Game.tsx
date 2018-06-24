import * as React from 'react';
import {KeyboardEvent} from "react";
import {GameEvent, GameEventType, NewInputEvent} from "./engine/Event"
import GameScenario from './scenario/main';
import GameView from "./view/EventsView";

interface AppState {
    events: GameEvent[]
    lastInputPointer: number
    renderSOS: boolean;
}

class Game extends React.Component<any, AppState> {
    private nameInput: HTMLInputElement;

    constructor(props: any) {
        super(props);
        this.onBlur = this.onBlur.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.state = {
            events: GameScenario.getEvents(),
            lastInputPointer: 0,
            renderSOS: false
        };
    }

    public onBlur() {
        this.nameInput.focus()
    }

    public handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter' && this.nameInput.value.length !== 0) {
            if (this.nameInput.value === "sos"){ // custom sos cmd
                this.setState({renderSOS: true})
            } else {
                GameScenario.send(this.nameInput.value);
                this.setState({
                    events: GameScenario.getEvents(),
                    lastInputPointer: 0
                });
            }
            this.nameInput.value = "";

        }
        else if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.nameInput.value = this.getHistoryInput(this.state.lastInputPointer - 1);
        }
        else if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.nameInput.value = this.getHistoryInput(this.state.lastInputPointer + 1);
        }
    }

    public render() {
        return (
            <div id="game">
                <GameView events={this.state.events}/>
                <span id="input">
                    <div id="input-tag">{'> '}</div>
                    <input id="input-element"
                           ref={(input: HTMLInputElement) => {
                               this.nameInput = input;
                           }}
                           autoFocus={true}
                           onBlur={this.onBlur}
                           onKeyDown={this.handleKeyDown}
                    />
                </span>
            </div>
        );
    }


    private getHistoryInput(pointer: number): string {

        // if pointer points forward do nothing
        if(pointer >= 0){
            this.setState({
                lastInputPointer: 0
            });
            return '';
        }

        // get all inputs
        const newInputEvents =
            this.state.events
                .filter((gameEvent): gameEvent is NewInputEvent => gameEvent.type === GameEventType.NEW_INPUT);

        // if the pointer points to the beginning do not allow it to travel further
        if (Math.abs(pointer) <= newInputEvents.length){
            this.setState({
                lastInputPointer: pointer
            });
        }

        // return the input pointed at
        return newInputEvents
            .map(gameEvent => gameEvent.input)
            .slice(pointer)
            .shift() || '';

    }
}

export default Game;
