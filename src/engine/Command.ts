export enum CommandType {
    TAKE,
    GO,
    UNKNOWN
}

export class Command {
    public commandType: CommandType;
    public originalCommand: string;

    constructor(commandType: CommandType, originalCommand: string) {
        this.commandType = commandType;
        this.originalCommand = originalCommand;
    }
}
