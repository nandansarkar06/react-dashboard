import React, { Component } from "react";
import "./TableComponent.css";

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  render() {
    return <td>{this.state.item}</td>;
  }
}
class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.person
    };
  }
  render() {
    return (
      <tr>
        <TableCell item={this.state.person.name} />
        <TableCell item={this.state.person.email} />
        <TableCell item={this.state.person.age} />
        <TableCell item={this.state.person.city} />
      </tr>
    );
  }
}

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("data/people.json")
      .then(res => res.json())
      .then(
        items => {
          this.setState({
            isLoaded: true,
            items
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table className="TableComponent">
          <tbody>
            {items.map((item, index) => <TableRow key={index} person={item} />)}
          </tbody>
        </table>
      );
    }
  }
}

export default TableComponent;
