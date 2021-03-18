import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IAppState {
  fullname: string;
  age: string;
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      age: '',
    }
  }

  handleBtnClick = () => {
    alert(`${this.state.fullname} ${this.state.age}`)
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    const newState = { ...this.state };
    newState[name] = value;

    this.setState(newState);  
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form>
            <input name="fullname" value={this.state.fullname} placeholder="type fullname here" onChange={this.handleChange} />
            <br/>
            <input name="age" value={this.state.age} placeholder="type age here" onChange={this.handleChange} />
            <br/>
            <button type="button" onClick={this.handleBtnClick}>SAVE</button>
          </form>
       </header>
      </div>
    )
  }
}

export default App;
