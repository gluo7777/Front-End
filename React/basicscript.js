'use strict';

const ele = document.querySelectorAll('.placeholder');

// basic example
// react elements are immutable, cheap to create
// with JSX
ReactDOM.render(
    <h1>Hey, this is my first app with JSX!</h1>,
    ele[0]
);
// without JSX
// Babel compiles JSX into this
ReactDOM.render(
    React.createElement(
        'h1',
        null,
        'Hey, this is my first app without JSX!'
    ),
    ele[0]
);



console.log('JSX: %s',(<h1>test</h1>));

// embedded exp
const name = "William Luo";
ReactDOM.render(
    <div>
        <p>Hey {name}!</p>
        <p>You are {10+13} years old.</p>
    </div>,
    ele[1]
)

function createGreeting(person){
    return <p>Hey {person.first} {person.last}!</p>;
}

const me = {first:'William', last:'Luo'};

ReactDOM.render(
    <div>
        {createGreeting(me)}
        {createGreeting(me)}
        {createGreeting(me)}
        {createGreeting(me)}
        {createGreeting(me)}
    </div>,
    ele[2]
)


// React calculates diff and only updates exactly what changed
// only need to think about what ui would look like and not how to update it
function tick() {
    const element = (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, ele[3]);
}
const start = () => setInterval(tick, 1000);

// Embedded expressions in JSX {} are escaped, converting to strings before embedding.
// prevents XSS and injection attacks

// React utilizes jsx to create components that contain
// both markup and logic to isolate it from the rest of
// JS logic

// elements != components

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-container1'));