import React, { Component } from 'react';

class EachBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
      boxValue: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.reset) {
      this.setState({boxValue: "", isEditable: true});
    }
  }

  setValue(boxNum) {
    let val = "";
    if(this.state.isEditable) {
      this.setState({isEditable: false});
      if(this.props.isUserX) {
        val = "X";
      } else {
        val = "O";
      }
      this.setState({boxValue: val});
      this.updateParent(val);
    }
  }

  updateParent(val) {
    this.props.updateBoxValue(this.props.boxNum, val);
    this.props.checkIfUserWon();
    this.props.toggleUser();
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
