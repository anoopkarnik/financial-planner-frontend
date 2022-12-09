import React from 'react';
import {Multiselect} from "multiselect-react-dropdown";

const SelectExpenseTypes = ({currentMonthId,getMonth,expenseTypes,currentAccountTypes,currentCategoryTypes}) =>{

    const onSelect = async(event) => {
        const current_expense_type = []
        if(event.length>0){
            for(let i =0;i<event.length;i++){
                current_expense_type.push(event[i].id)
                console.log(event[i].id)
            }
            getMonth(currentMonthId,current_expense_type,currentAccountTypes,currentCategoryTypes);
        }    
      };

    return (
		<div className='col-sm'>
            <label for='expenseType'>Expense Type</label>
            <Multiselect options={expenseTypes} onSelect={onSelect} onRemove={onSelect} displayValue="name" showCheckbox/>
        </div>
    )
    

}

export default SelectExpenseTypes;