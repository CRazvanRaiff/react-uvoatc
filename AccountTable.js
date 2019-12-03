import React, { Component } from 'react';

import Account from './Account';

export default class AccountTable extends Component {
  render() {
    return (
      <div className="wrap-home">
        <span className="form-title">Accounts</span>
        {this.props.accounts.map(account => 
          <Account account = {account}/>
        )}
        <button className="form-btn homeButton">New Account</button>
      </div>
    );
  }
}