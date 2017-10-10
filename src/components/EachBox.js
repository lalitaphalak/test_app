import React, { Component } from 'react';

class EachBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
      boxValue: ""
    }
  }

  setValue(boxNum) {
    let val = "";
    if(this.state.isEditable) {
      this.setState({isEditable: false});
      if(this.props.isUserX) {
        this.setState({boxValue: "X"});
        val = "X";
      } else {
        this.setState({boxValue: "O"});
        val = "O";
      }
      this.props.updateBoxValue(boxNum, val);
      this.props.checkIfUserWon();
      this.props.toggleUser();
    }
  }

  render() {
    return (
      <div className="each-box" onClick={this.setValue.bind(this, this.props.boxNum)}>
        {this.state.boxValue}
      </div>
    );
  }
}

export default EachBox;
