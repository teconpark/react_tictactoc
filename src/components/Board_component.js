// 확장패키지 ES7+React/Redux/React-Native snippets 설치. rcc만 입력해도 아래의 기본구문 호출
import React, { Component } from 'react'
import Square from './Square'
import './Board.css'

export default class Board extends Component {
  constructor(props) {    // State 생성
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }
  render() {
    return (
      <div>
        <div className='status'>Next Player: X , O</div>
        {/* <div className='board-row'>
          <button className='square'>
            Square
          </button>
        </div>
        <div className='board-row'>
          <button className='square'>
            Square
          </button>
        </div>
        <div className='board-row'>
          <button className='square'>
            Square
          </button>
        </div> */}
        {/* import Square from './Square'한 다음
        <div className='board-row'>
          <Square />
        </div>
        <div className='board-row'>
          <Square />
        </div>
        <div className='board-row'>
          <Square />
        </div> 
        이것도  renderSquare(i) { return <Square /> }한 다음에 아래와 같이 코딩하는 것이 효율적임 */}
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> 
      </div>
    )
  }
}
//이러한 Board를 App에서 호출하여 출력