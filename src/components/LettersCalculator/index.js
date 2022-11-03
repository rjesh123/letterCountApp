// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  state1 = {
    searchInput: '',
  }

  onChangeInputValue = event => {
    this.state1({searchInput: event.target.value})
  }

  onLetterCount = () => {
    const {searchInput} = this.state1
    this.setState(prevState => ({count: prevState.count + searchInput.length}))
  }

  render() {
    const {count} = this.state
    const {searchInput} = this.state1

    return (
      <div className="app-container">
        <div className="letters-card-container">
          <div className="letters-count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="phrase">Enter the phrase</label>
            <input
              id="phrase"
              type="input"
              className="input-value"
              onChange={this.onChangeInputValue}
              value={searchInput}
              onClick={this.onLetterCount}
            />
            <p className="letters-count">No.of Letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
