import * as React from 'react';

interface AsciiImageProps {
    imageSrc: string,
}


function AsciiImage(props: AsciiImageProps) {
    const lines =
        props
            .imageSrc
            .split('\n')
            .map(line => <div className="imageLine" key={line}>{line}</div>);
    return (
        <div className="image">
            {lines}
        </div>
    );
}

export default AsciiImage;
