import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

	state = {
		stocks: []
	}

	componentDidMount = () => {
		fetch('http://localhost:3000/stocks')
		.then(res => res.json())
		.then(stocks => this.setState({stocks}));
	}

  render() {
  	console.log(this.state.stocks)
    return (
      <div>
        <Header/>
        {this.state.stocks.length > 0 ? <MainContainer stocks={this.state.stocks}/> : null}
      </div>
    );
  }
}

export default App;
