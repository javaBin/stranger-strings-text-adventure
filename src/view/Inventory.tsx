import * as React from 'react';

interface InventoryProps {
    items: string[];
}

function iventoryString(items: string[]): string {
    if (items.length === 0) {
        return 'Your inventory is empty';
    }
    return 'Your inventory contains: ' + items.join(', ');
}

function Inventory(props: InventoryProps) {
    return <div className="inventory">{iventoryString(props.items)}</div>;
}

export default Inventory;
