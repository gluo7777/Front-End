const ele = document.querySelectorAll('.placeholder');
// 11

const Numbers = props => <ol>{props.numbers.map(i => <li>{i}</li>)}</ol>;

ReactDOM.render(
    <Numbers numbers={[1,2,3,4,5,6,7,8,9,10]}/>,
    ele[11]
);