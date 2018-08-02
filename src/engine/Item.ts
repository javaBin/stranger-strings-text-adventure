
class Item {
    public use: () => string;
    public look: () => string;
    public take: () => string;

    public setUse(use: () => string): Item {
        this.use = use;
        return this;
    }

    public setLook(look: () => string): Item {
        this.look = look;
        return this;
    }

    public setTake(take: () => string): Item{
        this.take = take;
        return this;
    }
}

export default Item;


