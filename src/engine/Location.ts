
class Location {
    public id: string;
    public description: string;
    public image?: string;
    public locations: Map<string, Location[]>;

    constructor(){
        this.locations = new Map<string, Location[]>();
    }

    public setId(value: string): Location {
        this.id = value;
        return this;
    }

    public setDesc(value: string): Location {
        this.description = value;
        return this;
    }

    public setImg(value: string): Location{
        this.image = value;
        return this;
    }

    public link(path: string, location: Location): Location{
        this.locations[path] = location;
        return this;
    }
}

export default Location;


