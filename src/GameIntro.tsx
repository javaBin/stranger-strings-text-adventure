import * as React from 'react';
import Game from "./Game";


function GameIntroView() {
    return <div className="game-intro">
        <h1 className="game-intro-title">READY PLAYER ONE</h1>
        <h2 className="game-intro-subtitle">PRESS ENTER TO PLAY THE GAME</h2>
    </div>;
}

interface GameIntroState {
    gameStarted: boolean
}

class GameIntro extends React.Component<any, GameIntroState> {
    constructor(props: any) {
        super(props);
        this.state = {
            gameStarted: false,
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTouch = this.handleTouch.bind(this);
    }

    public componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown, false);
        document.addEventListener("touchstart", this.handleTouch, false);
    }

    public handleKeyDown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.setState({gameStarted: true})
        }
    }

    public handleTouch(event: TouchEvent) {
        this.setState({gameStarted: true})
    }

    public render() {
        return (
            <div id="game">
                {
                    this.state.gameStarted ? <Game/> : <GameIntroView/>
                }
            </div>
        );
    }
}

export default GameIntro;
