import * as React from 'react';

interface ItemProps {
    text: string
}

function Item(props: ItemProps) {
    return (
        <div className="item">
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default Item;
