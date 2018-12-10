const ele = document.querySelectorAll('.placeholder');

// React Components
// function comps
const MyTitle = props => (<h1>Hey {props.name}!</h1>);

// ES6 class comps
class MyTitleCls extends React.Component{
    render(){
        return (<h1>Hey {this.props.name}!</h1>);
    }
}

// user defined components
// components START with Capital Letter
// lower first letters will be treated as DOM tags (e.g. <div>)
// note arguments are read-only and cannot be modified (i.e. pure functions)
const ProfileElement = (props) => (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.sex}</p>
    </div>
);
const FooterElement = (props) => (
    <footer>
        <a href="https://github.com/gluo7777">Link to my github</a>
    </footer>
);
const PageElement = (props) => (
    <div>
        <MyTitle name={props.name}/>
        {ProfileElement(props)}
        <FooterElement/>
    </div>
);
// React embdeds attributes in a props obj
ReactDOM.render(
    <PageElement name="Wiliam Luo" age="23" sex="Male"/>,
    ele[4]
);

// Define properties against element instead of context
const display = {
    car: {
        make: "Toyota",
        model: "Corolla"
    },
    food: {
        entree: "Hamburger",
        appetizer: "French Fries"
    }
}
const CarElement = (props) => (
    <div>
        <p>Make: {props.car.make}</p>
        <p>Make: {props.car.model}</p>
    </div>
);
const FoodElement = (props) => (
    <div>
        <p>Entree: {props.food.entree}</p>
        <p>Appetizer: {props.food.appetizer}</p>
    </div>
);
const DisplayElement = (props) => (
    <div>
        <h1>My Favorite Car: </h1>
        <CarElement car={props.car}></CarElement>
        <h1>My Favorite Foods: </h1>
        <FoodElement food={props.food}></FoodElement>
    </div>
);
ReactDOM.render(
    <DisplayElement car={display.car} food={display.food}/>, ele[5]
);