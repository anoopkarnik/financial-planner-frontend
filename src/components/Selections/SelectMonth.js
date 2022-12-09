import React from 'react';

const SelectMonth = ({months,getMonth,currentExpenseTypes,currentAccountTypes,currentCategoryTypes}) =>{

    const handleChange = (event) => {
        getMonth(event.target.value,currentExpenseTypes,currentAccountTypes,currentCategoryTypes);
        console.log("Current month id" +event.target.value);
      };

  
    return (
        <div className='col-sm'>
            <label for='month'>Month</label>
            <select onChange={handleChange} className='form-select'>
                <option value="" selected disabled hidden> Select</option>
                {months.map((month)=>(
                <option value={month.id}>{month.name}</option>   
                ))}
            </select>
        </div>
    )
    

}

export default SelectMonth;