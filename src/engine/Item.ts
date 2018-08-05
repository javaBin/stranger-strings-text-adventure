class Item {
    public use: () => string;
    public look: () => string;
    public take: () => string;
    public takeable = false;

    public customCommands: Map<string, () => string>;

    constructor() {
        this.customCommands = new Map();
    }

    public setUse(use: () => string): Item {
        this.use = use;
        return this;
    }

    public setLook(look: () => string): Item {
        this.look = look;
        return this;
    }

    public setTakeable(value: boolean): Item {
        this.takeable = value;
        return this;
    }

    public setTake(take: () => string): Item {
        this.take = take;
        return this;
    }

    public on(cmd: string, fn: () => string): Item {
        this.customCommands.set(cmd, fn);
        return this;
    }
}

export default Item;
