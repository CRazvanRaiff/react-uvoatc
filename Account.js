import React, { Component } from 'react';

export default class Account extends Component {
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
      <div class="form-btn account" onClick = {this.removeAccount}>
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