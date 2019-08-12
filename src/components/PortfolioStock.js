import React from 'react';

const PortfolioStock = (props) => {
	return(
		<div >
			<div className="card">
		    <div className="card-body" onClick={() => props.handleSellingAStock(props.stock)}>
		      <h5 className="card-title">{
		          props.stock.name
		        }</h5>
		      <p className="card-text">{
		          props.stock.price
		        }</p>
		    </div>
		  </div>
		</div>
	);
}

export default PortfolioStock;