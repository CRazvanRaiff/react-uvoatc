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
      <div className="form-btn account" onClick = {this.removeAccount}>
        <img src = {this.props.account.avatar} style={{display: 'block', maxHeight: '100%', maxWidth: '100%'}}/>
        {this.props.account.id} <br/>
        {this.props.account.email} <br/>
        {this.props.account.first_name} <br/>
        {this.props.account.last_name} <br/>
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