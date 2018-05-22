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
            return "Invalid input. For a list of available command, type HELP";
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
