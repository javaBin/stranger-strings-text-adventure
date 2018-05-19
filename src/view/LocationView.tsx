import * as React from 'react';
import AsciiImage from "./AsciiImage";

interface LocationViewProps {
    id: string,
    description: string,
    image?: string
}


function LocationView(props: LocationViewProps) {

        return (
            <div className="location">
                {props.image ? <AsciiImage imageSrc={props.image}/> : null}
                <header className="header">
                    <p className="title">--- {props.id} ---</p>
                </header>
                <p className="description">
                    {props.description}
                </p>
            </div>
        );
}

export default LocationView;
