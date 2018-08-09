export class CommandType {
    public static values: CommandType[] = [];

    public static readonly GO = new CommandType('GO');
    public static readonly TAKE = new CommandType('TAKE');
    public static readonly INVENTORY = new CommandType('INVENTORY');
    public static readonly USE = new CommandType('USE');
    public static readonly LS = new CommandType('LS');
    public static readonly LOOK = new CommandType('LOOK');
    public static readonly HELP = new CommandType('HELP');

    private constructor(public readonly name: string) {
        CommandType.values.push(this);
    }
}
