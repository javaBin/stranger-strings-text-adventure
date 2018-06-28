import * as React from 'react';

function helpMeView(count: number) {
    return Array
        .from({length: count}, (key, value) => value)
        .map((e) => <p key={e}>HELP ME!!</p>)
}

interface SoSState {
    count: number
}

class SOSView extends React.Component<any, SoSState> {
    private eventEnd: HTMLDivElement;
    private mounted: boolean

    constructor(props: any) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.increaseCounter = this.increaseCounter.bind(this);
    }

    public scrollToBottom() {
        this.eventEnd.scrollIntoView();
    }

    public componentWillMount(){
        this.mounted = true;
        this.setState({
            count: 0,
        });
    }

    public componentDidMount() {
        window.addEventListener("resize", this.scrollToBottom.bind(this));
        this.scrollToBottom();
        setTimeout(() => this.increaseCounter(), 100);
    }

    public componentDidUpdate() {
        this.scrollToBottom();
    }

    public componentWillUnmount() {
        window.removeEventListener("resize", this.scrollToBottom, false);
        this.mounted = false;
    }

    public increaseCounter() {
        if (this.mounted) {
            const time = 100 - 5 * this.state.count;
            this.setState({count: this.state.count + 1});
            setTimeout(() => this.increaseCounter(), time < 0 ? 0 : time);
        }
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
