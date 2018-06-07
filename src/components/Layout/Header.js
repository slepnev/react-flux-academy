import React, {Component} from 'react';
import Title from "../Header/Title";

class Header extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div className="header text-center">
        <Title>{this.props.title}</Title>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.props.title}/>
      </div>
    );
  }
}

export default Header;
