// a form existing within a component can have its own state that reacts to user input

class CarForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            make:'TOYOTA',
            model:'COROLLA',
            year:'2011',
            comments: 'This car rocks!',
            color:'black' /* Set default color in color picker select list */
        };
        // this.handleMakeInput = this.handleInput.bind(this,'make');
        // this.handleModelInput = this.handleInput.bind(this,'model');
        // this.handleYearInput = this.handleInput.bind(this,'year');
        this.handleInput = this.handleInput.bind(this);
        this.handleCommentsInput = this.handleCustom.bind(this,'comments');
        this.handleColorInput = this.handleCustom.bind(this,'color');
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayText = next();
    }

    handleInput(event){
        const inputName = event.target.name;
        const inputType = event.target.type;
        const inputValue = event.target.value;
        let value = '';
        if(inputType === 'text'){
            value = String(inputValue).toUpperCase();
        }else if(inputType === 'number'){
            const number = parseInt(inputValue);
            value = number > 0 ? number : 0;
        }
        this.setState({[inputName]: value});
    }

    handleCustom(type,event){
        console.log(event);
        const input = event.target.value;
        let stateInput = {};
        switch (type) {
            case 'color':
                event.preventDefault();
            default:
                stateInput[type] = input;
            break;
        }
        this.setState(stateInput);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(`The form was submitted.`);
        ReactDOM.render(<h5>Submitted!</h5>,this.displayText);
        console.log(`Submitted Car: ${this.state}`);
    }

    /**
     * Controlled Components means that React always processes the input and has the final say on what the output will be.
     */
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Add a name attribute to reuse a single function */}
                <label>Make: <input name="make" type="text" value={this.state.make} onChange={this.handleInput}/></label>
                <label>Model: <input name="model" type="text" value={this.state.model} onChange={this.handleInput}/></label>
                <label>Year: <input name="year" type="number" value={this.state.year} onChange={this.handleInput}/></label>
                <label>Color: <ColorPicker color={this.state.color} onChange={this.handleColorInput}/></label>
                {/* React text areas uses value instead of embedded text */}
                <label>Comments: <textarea value={this.state.comments} onChange={this.handleCommentsInput}></textarea></label>
                <input type="submit" value="Complete"/>
                {/* File inputs are read-only, making them uncontrolled components. */}
                <input type="file" />
            </form>
        );
    }
}

const ColorPicker = (props) => (
    <select name="color" value={props.color} onChange={props.onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="white">White</option>
        <option value="black">Black</option>
    </select>
);

ReactDOM.render(<CarForm placeHolder={next()}/>,next());