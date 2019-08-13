import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    bought: []
  }

  handleBuyingAStock = (stock) => {
    if (!this.state.bought.includes(stock)) {
      this.setState({bought: [...this.state.bought, stock]})
    }
  }

  handleSellingAStock = (stock) => {
    if (this.state.bought.includes(stock)) {
      this.setState({bought: this.state.bought.filter(current => current !== stock)})
    }
  }

  render() {
    return (
      <div>
        <SearchBar alphaClicked={this.props.alphaClicked} alphabetize={this.props.alphabetize}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleBuyingAStock={this.handleBuyingAStock} stocks={this.props.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleSellingAStock={this.handleSellingAStock} stocks={this.state.bought}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
