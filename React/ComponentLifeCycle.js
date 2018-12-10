const ele = document.querySelectorAll('.placeholder');
const start = 6;

// Encapsulating state within a component
// State is a feature available only to components defined via ES6 classes
class Clock extends React.Component{
    // initialize state
    // state is local/encapsulated/flows downwards
    // only stuff defined inside clock will have access to Clock's state. The context where Clock is injected should not care.
    constructor(props){
        super(props); // initialize React.Component
        this.state = {
            date: new Date()
        };
    }

    // Life Cycle methods
    /**
     * executes after successfully injecting into DOM.
     */
    componentDidMount(){
        // start timer here.
        // interval is saved to this instead of state
        // b/c interval is not used to update DOM
        // calling setState (instead of changing property on date) notifies React that the state has changed and React then calls render() to produce a diff to determine any changes
        // NOTE: this.state.date = new Date() will not cause React to rerender a component
        // this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
        this.interval = setInterval(() => this.tickAndLog(), 1000);
    }

    tick(){
        this.setState({date: new Date()});
    }

    /**
     * Since state updates could be asynchronous, direct reads may be inaccurate (e.g. this.state.date).
     * Instead add args for state
     */
    tickAndLog(){
        this.setState((state,props) => {
            // console.log(`State: ${state.date}.\nProperties: ${props}`);
            return {
                date: new Date()
            };
        });
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    /**
     * Creates a new  clock each time, but if injected into same DOM element, only created once. Allows state to be retained.
     */
    render(){
        // replace props with state
        return (
            <div>
                <h1>My Timer</h1>
                <h2>Current time is {this.state.date.toLocaleTimeString()}!</h2>
            </div>
        );
    }
}

ReactDOM.render(<Clock></Clock>, ele[6]);