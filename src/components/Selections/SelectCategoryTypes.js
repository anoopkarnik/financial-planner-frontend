import React from 'react';
import {Multiselect} from "multiselect-react-dropdown";

const SelectCategoryTypes = ({currentMonthId,getMonth,currentExpenseTypes,allCategoryTypes,currentAccountTypes}) =>{

    const onSelect = async(event) => {
        const current_category_type = []
        if(event.length>0){
            for(let i =0;i<event.length;i++){
                current_category_type.push(event[i].id)
                console.log(event[i].id)
            }
            getMonth(currentMonthId,currentExpenseTypes,currentAccountTypes,current_category_type);
        }
      };

    return (
		<div className='col-sm'>
            <label for='allCategoryType'>Category Type</label>
            <Multiselect options={allCategoryTypes} onSelect={onSelect} onRemove={onSelect} displayValue="name" showCheckbox/>
        </div>
    )
    

}

export default SelectCategoryTypes;