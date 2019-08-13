import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

	state = {
		stocks: [],
		alphaClicked: false
	}

	alphabetize = () => {
		this.setState({alphaClicked: !this.state.alphaClicked})
	}

	componentDidMount = () => {
		fetch('http://localhost:3000/stocks')
		.then(res => res.json())
		.then(stocks => this.setState({stocks}));
	}

	processStocks = () => {
		let stocks = [...this.state.stocks];
		if (this.state.alphaClicked) {
			return stocks.sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
		}
		else {
			return stocks;
		}
	}

  render() {
  	console.log(this.state.alphaClicked)
  	console.log(this.state.stocks)
    return (
      <div>
        <Header/>
        {this.state.stocks.length > 0 ? <MainContainer alphaClicked={this.state.alphaClicked} stocks={this.processStocks()} alphabetize={this.alphabetize}/> : null}
      </div>
    );
  }
}

export default App;
