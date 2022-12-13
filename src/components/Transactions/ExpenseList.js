import React from 'react'
import UnplannedExpenseItem from './UnplannedExpenseItem';
import MonthlyPlannedExpenseItem from './MonthlyPlannedExpenseItem';

const ExpenseList = ({showPlannedExpanses,showUnplannedExpanses,monthlyPlannedExpenses,unplannedExpenses,getMonth,currentMonthId,backend_url,updateBalance}) => {
    
    return (
		<ul className='list-group'>
			{showUnplannedExpanses?<div>
			{unplannedExpenses.map((unplannedExpense) => (
				<UnplannedExpenseItem id={unplannedExpense.id} name={unplannedExpense.name} cost={unplannedExpense.cost} getMonth={getMonth} currentMonthId={currentMonthId} backend_url={backend_url} sub_account_type={unplannedExpense.sub_account_type} updateBalance={updateBalance}/>
			))}</div>:null}
			
			{showPlannedExpanses?<div>	
			{monthlyPlannedExpenses.map((monthlyPlannedExpense) => (
				<MonthlyPlannedExpenseItem id={monthlyPlannedExpense.id} name={monthlyPlannedExpense.name} cost={monthlyPlannedExpense.cost} getMonth={getMonth} currentMonthId={currentMonthId} backend_url={backend_url} sub_account_type={monthlyPlannedExpense.sub_account_type} updateBalance={updateBalance}/>
			))}</div>:null}
		</ul>
    )
}

export default ExpenseList