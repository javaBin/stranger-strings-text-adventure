import * as React from 'react';


const helpMapper = {
    "GO": " <DIRECTION> :  e.g `go north`, or `go through door`",
    "HELP": " : shows this help text",
    "LOOK": " : repeats the room description",
    "LOOK AT": " <OBJECT> : e.g `look at door`",
    "TAKE": " <OBJECT> :  e.g `take keys`",
    "USE": " <OBJECT> : e.g `use keys`"
};

interface HelpViewProps {
    visibleCommand: string[],
}


function HelpView(props: HelpViewProps) {

    console.log(props);
    const helpBlock = props.visibleCommand.map(command =>
        <div key={command} className="command-block">
            <div className="command-block-key">{command}</div>
            <div className="command-block-tip">{helpMapper[command]}</div>
        </div>
    );

    console.log(Object.keys(props.visibleCommand));
    console.log(helpBlock);
    return (
        <div className="help">
            <div className="help-description">These are the default commands and will be most used:</div>
            {helpBlock}
            <div className="help-description">But there may be more hidden commands available. Use logic to figure it out!</div>
        </div>
    );
}

export default HelpView;
