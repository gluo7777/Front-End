// Thinking in React
// 1. UI Mock Up
// 2. Break UI into components and place them in the hierarchy
// 3. Build static app (no state, only props)
// 4. Make it dynamic (add state and interactivity)

const json = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

const FilterableProductTable = (props) => <div>
  {props.children}
</div>;
const SearchBar = (props) => <div>
  <input type="text" placeholder="Search..."></input>
  <div className="row">
      <input type="checkbox"></input>
      <p>Only show products in stock</p>
  </div>
</div>;
const ProductTable = (props) => <div>
<p><strong>Name</strong>    <strong>Price</strong></p>
{props.children}
</div>;
ReactDOM.render(<h3>Test!</h3>, document.querySelector('#main-container'));