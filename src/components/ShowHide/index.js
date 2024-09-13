import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  toggleFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  toggleLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="buttons-container">
            <div className="first-name-container">
              <button
                type="button"
                className="button"
                onClick={this.toggleFirstName}
              >
                Show/Hide FirstName
              </button>
              {showFirstName && <p className="name">Chandru</p>}
            </div>
            <div className="last-name-container">
              <button
                type="button"
                className="button"
                onClick={this.toggleLastName}
              >
                Show/Hide LastName
              </button>
              {showLastName && <p className="name">Sekar</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
