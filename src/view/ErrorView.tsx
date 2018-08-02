import * as React from 'react';
import {GameError} from "../engine/GameError";

interface ErrorViewProps {
    error: GameError,
}

function errorMessage(error: GameError): string{
    switch (error){
        case GameError.INVALID_PATH:
            return "There is no path there";
        case GameError.UNKNOWN_COMMAND:
            return "Unknown command. I don't understand this input. For a list of available commands, type HELP";
        case GameError.NO_ITEM:
            return "Invalid command. There is no item there";
    }
}

function ErrorView(props: ErrorViewProps) {
    return (
        <div className="error">
            <p>
                {errorMessage(props.error)}
            </p>
        </div>
    );
}

export default ErrorView;
