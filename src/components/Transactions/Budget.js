import React from 'react';
const Budget = ({totalIncome}) => {
    
	return (
		<div className='alert alert-primary'>
			<span>Income: Rs {totalIncome.sum}</span>
		</div>
	);
};

export default Budget;