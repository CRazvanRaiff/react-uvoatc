import React, { Component } from 'react';
import { render } from 'react-dom';
import AccountTable from './AccountTable';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      this.setState({ accounts: JSON.parse(xhr.responseText).data, isLoading: false });
    })
    xhr.open('GET', 'https://reqres.in/api/users')
    xhr.send()
  }

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div className="container">
          <AccountTable accounts = {this.state.accounts}></AccountTable>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));