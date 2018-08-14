import * as React from 'react';
import Text from './Text';

interface CommandProps {
    orignalCommand: string;
}

function Command(props: CommandProps) {
    return (
        <div className="command"
             role="text"
             aria-label={`${props.orignalCommand}`}>
            <Text text={`> ${props.orignalCommand}`} />
        </div>
    );
}

export default Command;
