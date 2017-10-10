import React, { Component } from 'react';
import EachBox from './EachBox';

class TicTacToeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserX: true,
      reset: true,
      boxesStatus: [null, null, null, null, null, null, null, null, null],
      xWon: 0,
      oWon: 0
    }
    this.toggleUser = this.toggleUser.bind(this);
    this.updateBoxValue = this.updateBoxValue.bind(this);
    this.checkIfUserWon = this.checkIfUserWon.bind(this);
    this.showGameStatus = this.showGameStatus.bind(this);
  }

  componentDidMount() {
    this.setState({reset: false});
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
    let won = false;

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
              that.showGameStatus(false);
              setTimeout(function() {
                that.resetState();
              }, 100);
              won = true;
            }
          }
        })
      });
    }

    if(!won && !this.state.boxesStatus.includes(null)) {
      that.showGameStatus(true);
    }
  }

  resetState() {
    this.setState({boxesStatus: [null, null, null, null, null, null, null, null, null], isUserX: true, reset: true});
  }

  updateBoxValue(ind, val) {
    let boxesStatus = this.state.boxesStatus;
    boxesStatus[ind] = val;
    this.setState({boxesStatus: boxesStatus, reset: false});
  }

  showGameStatus(isDraw) {
    let that = this;
    if(isDraw) {
      setTimeout(function() {
        if(window.confirm("Draw, Play again!") === true) {
          that.resetState();
        }
      }, 100);
    } else if(this.state.isUserX) {
      setTimeout(function() {
        that.setState({xWon: that.state.xWon + 1});
        alert("X has Won!");
      }, 100);
    } else {
      setTimeout(function() {
        that.setState({oWon: that.state.oWon + 1})
        alert("O has Won!");
      }, 100);
    }
  }

  boxes() {
    let boxes = [];
    for(var i = 0; i < 9; i++) {
      boxes.push(<EachBox key={i} boxNum={i} isUserX={this.state.isUserX} toggleUser={this.toggleUser} updateBoxValue={this.updateBoxValue} checkIfUserWon={this.checkIfUserWon} reset={this.state.reset}></EachBox>);
    }
    return boxes;
  }

  render() {
    let boxes = [];
    boxes = this.boxes();
    return (
      <div>
        <div style={{marginTop: '10px'}}>
          <div>X Won: {this.state.xWon} </div>
          <div>O Won: {this.state.oWon}</div>
        </div>
        <div className="container">
          {boxes}
        </div>
      </div>
    );
  }
}

export default TicTacToeContainer;
