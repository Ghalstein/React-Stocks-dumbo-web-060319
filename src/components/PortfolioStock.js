import React from 'react';

const PortfolioStock = (props) => {
	return(
		<div className="card" onClick={null}>
	    <div className="card-body">
	      <h5 className="card-title">{
	          props.stock.name
	        }</h5>
	      <p className="card-text">{
	          props.stock.price
	        }</p>
	    </div>
	  </div>
	);
}

export default PortfolioStock;