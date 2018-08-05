import * as React from 'react';
import Text from './Text';

interface CommandProps {
    orignalCommand: string;
}

function Command(props: CommandProps) {
    return (
        <div className="command">
            <Text text={`> ${props.orignalCommand}`} />
        </div>
    );
}

export default Command;
