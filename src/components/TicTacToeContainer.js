import React, { Component } from 'react';
import EachBox from './EachBox';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser1: true
    }
    this.toggleUser = this.toggleUser.bind(this);
  }

  toggleUser() {
    this.setState({isUser1: !this.state.isUser1});
  }

  boxes() {
    let boxes = [];
    for(var i = 0; i < 9; i++) {
      boxes.push(<EachBox key={i} boxNum={i} isUser1={this.state.isUser1} toggleUser={this.toggleUser}></EachBox>);
    }
    return boxes;
  }

  render() {
    let boxes = this.boxes();
    return (
      <div className="container">
        {boxes}
      </div>
    );
  }
}

export default TicTacToeContainer;
