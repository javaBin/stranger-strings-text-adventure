import * as React from 'react';
import AsciiImage from './AsciiImage';
import Text from './Text';

interface LocationViewProps {
    id: string;
    description: string;
    image?: string;
    imageAlt?: string
}

function LocationView(props: LocationViewProps) {
    return (
        <div className="location">
            {props.image && props.imageAlt ? <AsciiImage imageSrc={props.image} alt={props.imageAlt} /> : null}
            <h1 className="title">--- {props.id} ---</h1>
            <div className="description">
                <Text text={props.description} />
            </div>
        </div>
    );
}

export default LocationView;
