export class CommandType {
    public static values: CommandType[] = [];

    public static readonly GO = new CommandType("GO");
    public static readonly TAKE = new CommandType("TAKE");
    public static readonly HELP = new CommandType("HELP");

    private constructor(public readonly name: string) {
        CommandType.values.push(this)
    }

}

export class Command {
    public commandType: CommandType;
    public originalCommand: string;

    constructor(commandType: CommandType, originalCommand: string) {
        this.commandType = commandType;
        this.originalCommand = originalCommand;
    }
}
