// managed multiple components that share a state
// children propagate state changes up to closet ancestor

// comp1: lowercase
// comp2: uppercase
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: '', number: 0};
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event){
        console.log(event.target.getAttribute('data-test'));
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value === null ? '' : value
        });
    }

    render(){
        return <div>
            <h1>Fun with text!</h1>
            <Child name="text" type="text" desc="lower case" text={this.state.text.toLowerCase()} handler={this.handleInput}/>
            <Child name="text" type="text" desc="UPPER CASE" text={this.state.text.toUpperCase()} handler={this.handleInput}/>
            <h1>Fun with numbers!</h1>
            <Child name="number" type="number" desc="decimal" text={this.state.number} handler={this.handleInput}/>
            <Child name="number" type="number" desc="binary" text={this.state.number} handler={this.handleInput}/>
        </div>;
    }
}

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {lastModified: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        // update state
        this.setState({lastModified: Date().toString()});
        // propagate changes to parent intead of state
        this.props.handler(event);
    }

    render(){
        return <fieldset>
            <legend>Enter text in {this.props.desc}:</legend>
            <input data-test={this.props.name} name={this.props.name} type={this.props.type} value={this.props.text} onChange={this.handleChange}></input>
            <h5>Last updated {this.state.lastModified}</h5>
        </fieldset>;
    }
}

ReactDOM.render(<Parent/>,next());
// app idea
// Comp1: Enter 2 numbers
// Comp2-5: Display sum, difference, product, quotient