import React, { Component } from 'react';
import EachBox from './EachBox';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserX: true,
      boxesStatus: [null, null, null, null, null, null, null, null, null]
    }
    this.toggleUser = this.toggleUser.bind(this);
    this.updateBoxValue = this.updateBoxValue.bind(this);
    this.checkIfUserWon = this.checkIfUserWon.bind(this);
    this.showGameStatus = this.showGameStatus.bind(this);
  }

  toggleUser() {
    this.setState({isUserX: !this.state.isUserX});
  }

  checkIfUserWon() {
    let that = this;
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let valToCheck = this.state.isUserX ? "X" : "O";
    let boxValArray = [];

    this.state.boxesStatus.forEach(function(box, index){
      if(valToCheck === box) {
         boxValArray.push(index);
      }
    });

    if(boxValArray.length >= 3) {
      lines.forEach(function(line) {
        let counter = 0;
        boxValArray.forEach(function(boxVal) {
          if(line.includes(boxVal)) {
            ++counter;
            if(counter === 3) {
              that.showGameStatus();
            }
          }
        })
      });
    }
  }

  updateBoxValue(ind, val) {
    let boxesStatus = this.state.boxesStatus;
    boxesStatus[ind] = val;
    this.setState({boxesStatus: boxesStatus});
  }

  showGameStatus() {
    if(this.state.isUserX) {
      alert("X Won!");
    } else {
      alert("O Won!");
    }
  }

  boxes() {
    let boxes = [];
    for(var i = 0; i < 9; i++) {
      boxes.push(<EachBox key={i} boxNum={i} isUserX={this.state.isUserX} toggleUser={this.toggleUser} updateBoxValue={this.updateBoxValue} checkIfUserWon={this.checkIfUserWon}></EachBox>);
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
