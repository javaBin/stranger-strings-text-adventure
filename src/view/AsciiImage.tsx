import * as classNames from 'classnames';
import * as React from 'react';

interface AsciiImageProps {
    imageSrc: string;
    className?: string;
}


function AsciiImage(props: AsciiImageProps) {
    const lines =
        props
            .imageSrc
            .split('\n')
            .map(line =>
                <div className={classNames("imageLine", props.className)}
                     key={line}>{line}
                </div>);
    return (
        <div className={classNames("image", props.className)}>
            {lines}
        </div>
    );
}

export default AsciiImage;
