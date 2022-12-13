import React from 'react';
import { TiDelete } from 'react-icons/ti';
import axios from 'axios';

const MonthlyPlannedExpenseItem = ({id,name,cost,getMonth,currentMonthId,backend_url,sub_account_type,updateBalance}) => {
	
	const deleteExpense = async() =>{
		await axios.delete(backend_url+`/monthlyExpense/${id}`)
		await updateBalance(-1*cost,sub_account_type)
		getMonth(currentMonthId);
	}

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{name}
			<div>
				<span className='badge-primary badge-pill mr-3'>
					Rs {cost}
				</span>
				<TiDelete size='1.5em' onClick={deleteExpense}></TiDelete>
			</div>
		</li>
	);
};

export default MonthlyPlannedExpenseItem;