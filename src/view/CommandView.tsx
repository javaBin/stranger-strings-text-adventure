import * as React from 'react';
import {CommandType} from "../engine/Command";

interface CommandProps {
    commandType: CommandType,
    orignalCommand: string
}

function Command(props: CommandProps) {
        return (
            <div className="command">
                <p>
                    > {props.orignalCommand}
                </p>
            </div>
        );
}

export default Command;
