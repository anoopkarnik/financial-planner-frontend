import React from 'react';

const UnplannedExpenseTotal = ({totalUnplannedExpense}) => {
    
	return (
		<div className='alert alert-danger'>
			<span>Unplanned Expenses: Rs {totalUnplannedExpense.sum == null ? 0 : totalUnplannedExpense.sum}</span>
		</div>
	);
};

export default UnplannedExpenseTotal;