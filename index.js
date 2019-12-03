import React, { Component } from 'react';
import { render } from 'react-dom';
import AccountTable from './AccountTable';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      accounts: this.mockAccountList()
    };
  }

  render() {
    return (
        <div class="container">
          <AccountTable accounts = {this.state.accounts}></AccountTable>
        </div>
    );


    return (
      <div>
        {this.state.accounts.map(account =>
          <div>{account.accountOwner}</div>
        )}
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }

  mockAccountList() {
    return [{
        "id": 14,
        "iban": "E79BB4BA535B47598D965C33B43AEDF1",
        "currency": "HUF",
        "accountOwner": "Mihai Ionut",
        "amount": 1822.3
    },
    {
        "id": 15,
        "iban": "56BF551E27884975B4ECD9FA2A2B1DBC",
        "currency": "HUF",
        "accountOwner": "Mihai Andrei",
        "amount": 213.4
    },
    {
        "id": 16,
        "iban": "BEC732878D21437CAFC591207A1FAF04",
        "currency": "RON",
        "accountOwner": "Andrei Popescu",
        "amount": 124.3
    },
    {
        "id": 17,
        "iban": "F5579A7C347C4C8B9F20354D3AB5F8F3",
        "currency": "HUF",
        "accountOwner": "Mihai Bendeac",
        "amount": 1822.3
    }];
  }
}

render(<App />, document.getElementById('root'));