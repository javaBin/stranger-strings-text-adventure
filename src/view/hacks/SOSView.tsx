import * as React from 'react';

interface SoSState {
    count: number
}

function helpMeView(count: number) {
    return [...Array(count)].map((e, i) => <p key={count}>HELP ME!!</p>)
}

class SOSView extends React.Component<any, SoSState> {
    private eventEnd: HTMLDivElement;

    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
        this.scrollToBottom = this.scrollToBottom.bind(this);
        window.addEventListener("resize", this.scrollToBottom.bind(this));
    }

    public scrollToBottom() {
        // setTimeout(function(){ alert("Hello"); }, 3000);
        this.eventEnd.scrollIntoView();
    }

    public componentDidMount() {
        this.scrollToBottom();
    }

    public componentDidUpdate() {
        this.scrollToBottom();
    }

    public render() {
        return (
            <div className="events-container">
                <div className="events">{
                    helpMeView(this.state.count)
                }
                <div style={{float: "left", clear: "both"}}
                     ref={(el: HTMLDivElement) => {
                         this.eventEnd = el;
                     }}/>
                </div>
            </div>
        );
    }
}

export default SOSView;
