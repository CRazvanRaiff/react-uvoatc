import React, { Component } from 'react';

import Account from './Account';

export default class AccountTable extends Component {
  render() {
    return (
      <div class="wrap-home">
        <span class="form-title">Accounts</span>
        {this.props.accounts.map(account => 
          <Account account = {account}/>
        )}
        <button class="form-btn homeButton">New Account</button>
      </div>
    );
  }
}