// 7
const ele = document.querySelectorAll('.placeholder');

class Greeting extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            toggle: true,
            count: 0
        };
        // rebind this inside toggleTime to component context
        // This binding is necessary to make `this` work in the callback
        this.toggleTime = this.toggleTime.bind(this);
    }

    greet(event, msg){
        // event.target.parent.querySelector('p').innerText = this.props.msg;
        console.log(event);
    }
    
    greetExtraParams(event, msg){
        console.log(`Received message: ${msg}`);
        console.log(event);
    }

    /**
     * Unless this function is rebound, when it is
     * executed by onClick, the this refers to the global scope.
     * @param {} event 
     */
    toggleTime(event){
        this.setState((state) => {
            return {toggle: !state.toggle}
        });
    }
    
    render(){
        return (
            <div>
                <p>Click button to change text.</p>
                <button onClick={this.greet}>Greeting</button><br/>
                {/* Using bind. Extra arguments (e.g. event) will automatically follow*/}
                <button onClick={this.greetExtraParams.bind(this,event,'test')}>Greeting</button><br/>
                {/* Using lambdas. Extra arguments (e.g. event) will NOT automatically follow, so need to explicitly include them.*/}
                <button onClick={() => this.greetExtraParams(event,this.props.msg)}>Greeting</button><br/>
                {/* Bounded at constructor */}
                <button onClick={this.toggleTime}>{this.state.toggle ? 'Start' : 'Stop'}</button>
            </div>
        )
    }
}

ReactDOM.render(<Greeting msg="Hello World!"/>, ele[7]);