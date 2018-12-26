// Calculator App
// Components
// 1. Calculator Frame
// 2. Display
// 3. Number Pad
// 4. Clear
// 5. Operation buttons

function error(log,display) {
  console.log(log);
  window.alert(display);
}

const IN = Object.freeze({
  OP:0,NUM:1,DEC:2,DASH:3
});

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputs: [],
      display: 'Enter text...'
    };
    this.ops = ['ADD','SUB','MULT','DIV'];

    // bind JS to Component context instead of global
    this.push = this.push.bind(this);
  }

  /**
   * Validates then pushes 
   * next input to stack.
   * @param {Event} event 
   */
  push(event) {
    const input = event.target.name;
    this.setState((state,props) => {
      const stack = state.inputs;
      const last = stack.length-1;
      const top = stack[last];
      const inType = this.getType(input);
      const topType = this.getType(top);
      let display = '';
      if(stack.length === 0){
        if(inType === IN.OP){
          error('First input cannot be operation.','Try Again.');
        }else{
          stack.push(input);
        }
      }else{
        switch (inType) {
          case IN.NUM:
              if([IN.NUM, IN.DEC, IN.DASH].indexOf(topType) !== -1){
                stack[last] = top + input;
              }else{
                stack.push(input);
              }
            break;
          case IN.DEC:
            if(top.contains('.')){
              error(`Input already contains '.'`,`Redundant '.'`);
            }else{
              stack.push(input);
            }
            break;
          case IN.DASH:
            if(topType === IN.OP){
              stack.push(input);
            }else{
              error(`Negative symbol is must be first character`,`'-' must come first.`);
            }
            break;
          case IN.OP:
            if(topType === IN.NUM){
              // calculate current stack before pushing next operation
              if(stack.length === 3){
                display = this.compute();
              }
              stack.push(input);
            }else{
              error(`Operation already entered.`,`An operation was already entered.`);
            }
            break;
          default:
            error(`Unrecognized input: '${input}'`,`Enter a valid input.`);
            break;
        }
      }
      return {
        inputs: stack,
        display: display
      };
    });
  }

  compute(){
    let result = 'n/a';
    this.setState((state,props) => {
      let inputs = state.inputs;
      if(inputs.length !== 3 || !this.isNumber(inputs[input.length - 1])){
        error('Insufficient entries for calculation','Insufficient entries for calculation');
        return {};
      }
      result = this.operation(inputs[1])(inputs[0],inputs[2]);
      inputs = state.inputs.slice(3);
      inputs.push(result);
      return {inputs: inputs};
    });
    return result;
  }

  operation(op){
    switch(op){
      case 'ADD': return (x,y) => x + y;
      case 'SUB': return (x,y) => x - y;
      case 'MULT': return (x,y) => x * y;
      case 'DIV': return (x,y) => x / y;
      default: return (x,y) => {error('Unrecognized operation','Unrecognized operation'); return 'n/a';};
    }
  }

  getType(input){
    if (this.isNumber(input)) return IN.NUM;
    else if (this.ops.indexOf(input) !== -1) return IN.OP;
    else if (input === `.`) return IN.DEC;
    else if (input === `-`) return IN.DASH;
    else return -1;
  }

  isNumber(input){
    return /^-?\d*\.?\d*$/.test(input);
  }

  render(){
    return <div id="root" className="vertical container">
      <Display displayText={this.state.display}/>
      <NumberPad inputs={NUM_PAD} defaultHandler={this.push}/>
      <BottomPanel/>
    </div>;
  }
}

const NUM_PAD = [
  {val:"7"},{val:"8"},{val:"9"},{name:"ADD",val:"+"},
  {val:"4"},{val:"5"},{val:"6"},{name:"SUB",val:"-"},
  {val:"1"},{val:"2"},{val:"3"},{name:"MULT",val:"\u00D7"},
  {val:"0"},{val:"."},{val:"-"},{name:"DIV",val:"\u008F"}
];

const Display = (props) => <div id="display" className="horizontal container">
  <input type="text" name="displayInput" id="displayInput" value={props.displayText} disabled/>
</div>;

const NumberPad = (props) => <div id="numberpad" className="grid">{
  props.inputs.map(input => <button name={input.name ? input.name : input.val} onClick={input.handler ? input.handler : props.defaultHandler}>{input.val}</button>)
}</div>;

const BottomPanel = (props) => <div className="horizontal container">
<button onClick={props.clearHandler}>Clear</button><button onClick={props.equalsHandler}>=</button>
</div>;

ReactDOM.render(<Calculator/>,document.querySelector('#main-container'));