class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot"
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} /* your code here */ />
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          Hello, my name is: {this.props.name}
          {/* your code here */}{" "}
        </h1>
      </div>
    );
  }
}
