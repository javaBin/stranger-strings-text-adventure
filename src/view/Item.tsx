import * as React from 'react';
import Text from './Text';

interface ItemProps {
    text: string;
}

function Item(props: ItemProps) {
    return (
        <div className="item">
            <Text text={props.text} />
        </div>
    );
}

export default Item;
