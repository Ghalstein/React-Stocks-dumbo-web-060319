import React, { Component } from 'react';
import Stock from '../components/Stock';
import PortfolioStock from '../components/PortfolioStock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stock => <PortfolioStock stock={stock} key={stock.id} handleSellingAStock={this.props.handleSellingAStock}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
