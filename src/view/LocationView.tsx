import * as React from 'react';
import AsciiImage from './AsciiImage';
import Text from './Text';

interface LocationViewProps {
    id: string;
    description: string;
    image?: string;
}

function LocationView(props: LocationViewProps) {
    return (
        <div className="location">
            {props.image ? <AsciiImage imageSrc={props.image} /> : null}
            <header className="header">
                <p className="title">--- {props.id} ---</p>
            </header>
            <div className="description">
                <Text text={props.description} />
            </div>
        </div>
    );
}

export default LocationView;
