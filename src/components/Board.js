// 확장패키지 ES7+React/Redux/React-Native snippets 설치. rcc만 입력해도 아래의 기본구문 호출
import Square from './Square'
import './Board.css'

// App컴포넌트의 데이터를 전달받기 위해 props이용
// const Board = () => { 
const Board = ({squares, onClick}) => { 

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        // onClick={() => handleClick(i)}
        onClick={() => onClick(i)}
      />
    )
  }

  return (
    <div className='border-wrapper'>
      {/* {status}에 발생하는 에러를 제거하기 위해 아예 해당코드를 App으로 옮겨줌  */}
      {/* <div className='status'>{status}</div> */}
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div> 
    </div>
  )
}

export default Board