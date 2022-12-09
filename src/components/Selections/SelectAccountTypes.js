import React from 'react';
import {Multiselect} from "multiselect-react-dropdown";

const SelectAccountTypes = ({currentMonthId,getMonth,currentExpenseTypes,accountTypes,currentCategoryTypes}) =>{

    const onSelect = async(event) => {
        const current_account_type = []
        if(event.length>0){
            for(let i =0;i<event.length;i++){
                current_account_type.push(event[i].id)
                console.log(event[i].id)
            }
            getMonth(currentMonthId,currentExpenseTypes,current_account_type,currentCategoryTypes);
        }
    };


        

    return (
		<div className='col-sm'>
            <label for='accountType'>Account Type</label>
            <Multiselect options={accountTypes} onSelect={onSelect} onRemove={onSelect} displayValue="name" showCheckbox/>
        </div>
    )
}

export default SelectAccountTypes;