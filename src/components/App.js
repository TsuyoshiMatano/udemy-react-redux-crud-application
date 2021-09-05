
import React, { Component } from "react"; 

const App = () => (<Counter></Counter>)

class Counter  extends Component {
  constructor(props){ //初期化されるメソッド
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count +1})
    //stateを使ってはいけません。setStateを使うことで、renderされる(画面の表示が変わる)。
  }
  
  handleMinusButton = () => {
    this.setState({count: this.state.count -1})
  }

  render(){
    console.log(this.state)
    return(
      <React.Fragment>
        <div>count: {this.state.count} </div>
        <button onClick= {this.handlePlusButton} >+1</button>
        <button onClick= {this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;