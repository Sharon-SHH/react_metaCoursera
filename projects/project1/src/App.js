import logo from "./logo.svg";
import "./App.css";
import Bag from "./Bag";

function Example() {
  return <div>An element</div>;
}
function Apples(props) {
  return (
    <div>
      <h2>These apples are: {props.color}</h2>
      <p>The number is: {props.number}</p>
    </div>
  );
}

function Pears(props) {
  return <h2>I don't like pear, but {props.friend} does</h2>;
}

function App() {
  //export default Example;
  //return <Example />;
  return (
    <div className="App">
      <Bag children={<Example />} />
      This is the starting code for "Your first component" ungraded lab
      <Bag children={<Apples color="yellow" number="4"></Apples>} />
      This is an example for bags and pears.
      <Bag children={<Pears friend="Joyce"></Pears>} />
      <Bag>
        <Apples color="yellow" number="5" />
      </Bag>
      <Bag>
        <Pears friend="Peter" />
      </Bag>
    </div>
  );
}

export default App;
