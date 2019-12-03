import React from 'react';
import './login.css';
import './home.css';
import './app.css';
import { Redirect } from 'react-router-dom';
import { createHashHistory } from 'history'
import Route from 'react-router-dom/Route';
import Form from './Form.js'

export default class App extends React.Component {

  state = {
    isLoading: true
  };

  async componentDidMount() {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      this.setState({ accounts: eval(xhr.responseText), isLoading: false });
    })
    xhr.open('GET', 'http://localhost:8080/getAllAccounts')
    xhr.send()
  }

  

  render() {
    const {accounts, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div class="container-login100">
            <AccountTable accounts = {this.state.accounts}></AccountTable>
        </div>
    );

  }
}





class AccountTable extends React.Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    history.push('form')
  }

  render() {
    return (
      <div class="wrap-home">
        <span class="login100-form-title" style={{paddingBottom: '20px'}}>Accounts</span>
        {this.props.accounts.map(account =>
            <Account account = {account}></Account>
        )}
        <button onClick={this.routeChange} class="login100-form-btn homeButton" style={{marginTop: '10px'}}>New Account</button>
      </div>
    );
    
  }
}





class Account extends React.Component {

  state = {
    isEmpty: false
  };

  constructor() {
    super()
    this.removeAccount = this.removeAccount.bind(this)  
  }

  render() {
    const {isEmpty} = this.state;

    if(isEmpty)  
      return(null);

    return (
      <div class="login100-form-btn account" style={{height: '80px'}} onClick = {this.removeAccount}>
        {this.props.account.accountOwner} <br/>
        {this.props.account.iban} <br/>
        {this.props.account.amount} <br/>
        {this.props.account.currency}
      </div>
    );
  }

  removeAccount(account) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/deleteAccount')
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhr.send(JSON.stringify(this.props.account))
    this.setState({isEmpty:true});
  }
}

export const history = createHashHistory()