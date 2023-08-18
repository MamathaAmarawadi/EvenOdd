// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    // const {count} = this.state
    const random = Math.random() * 100
    const num = Math.ceil(random)

    this.setState(preState => {
      console.log(preState.count)
      return {count: num}
    })
  }

  render() {
    const {count} = this.state
    console.log(`${count}`)
    const a = {count}
    console.log(a)
    let Value
    if (a.count % 2 === 0) {
      Value = 'Even'
    } else {
      Value = 'Odd'
    }
    return (
      <div className="container">
        <div className="design">
          <div className="card">
            <h1 className="head">Count {count}</h1>
            <p className="heading">Count is {Value}</p>
            <div>
              <button onClick={this.onIncrement} className="button">
                Increment
              </button>
            </div>
            <p className="para">*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
