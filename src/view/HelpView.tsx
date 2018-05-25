import * as React from 'react';


const helpMapper = {
    "GO": " <DIRECTION> :  e.g `go north`, or `go through door`",
    "HELP": " : shows this help text",
    "LOOK": " : repeats the room description",
    "LOOK AT": " : e.g `look at door`",
    "TAKE": " <OBJECT> :  e.g `take keys`"
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
            <div className="help-description">These are the default commands:</div>
            {helpBlock}
        </div>
    );
}

export default HelpView;
