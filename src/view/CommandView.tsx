import * as React from 'react';

interface CommandProps {
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
