import React from 'react';

const MonthlyPlannedExpenseTotal = ({totalMonthlyPlannedExpense}) => {
    
	return (
		<div className='alert alert-danger'>
			<span>Monthly Planned Expenses: Rs {totalMonthlyPlannedExpense.sum == null ? 0 : totalMonthlyPlannedExpense.sum}</span>
		</div>
	);
};

export default MonthlyPlannedExpenseTotal;