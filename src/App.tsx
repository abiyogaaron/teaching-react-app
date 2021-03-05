import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IData {
  id: string;
  name: string;
  email: string;
}

interface IAppState {
  showTable: boolean;
}

interface IAppProps {
  data: IData[]
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      showTable: true,
    }
  }

  componentDidMount() {
    alert("did mount App component !")
  }

  componentWillUnmount() {
    alert("unmounting App component !")
  }

  componentDidUpdate() {
    alert("did update called !");
  }

  public toggleShowTable = () => {
    const { showTable } = this.state;
    this.setState({showTable: !showTable});
  }

  public renderRow = () => {
    return this.props.data.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
        </tr>
      )
    })
  }

  public renderTable = () => {
    if (this.state.showTable) {
      return (
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>email</td>
            </tr>
          </thead>
          <tbody>
            {this.renderRow()}
          </tbody>
        </table>
      )
    }
  }
  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.renderTable()}
          <button onClick={this.toggleShowTable}>test</button>
        </header>
      </div>
    )
  }
}

export default App;
