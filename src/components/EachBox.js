import React, { Component } from 'react';

class EachBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
      boxValue: ""
    }
  }

  setValue() {
    if(this.state.isEditable) {
      this.setState({isEditable: false});
      if(this.props.isUser1) {
        this.setState({boxValue: "X"});
      } else {
        this.setState({boxValue: "O"});
      }
      this.props.toggleUser();
    }
  }

  render() {
    return (
      <div className="each-box" onClick={this.setValue.bind(this)}>
        {this.state.boxValue}
      </div>
    );
  }
}

export default EachBox;
