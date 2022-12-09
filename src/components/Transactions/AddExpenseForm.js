import React, { useState } from 'react';

const AddExpenseForm = ({createExpense, updateBalance,currentMonthId,expenseTypes,backend_url,accountTypes}) => {
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const [expenseType, setExpenseType] = useState('');
	const [categoryType, setCategoryType] = useState('');
	const [subcategoryType, setSubcategoryType] = useState('');
	const [accountType, setAccountType] = useState('');
	const [subaccountType, setSubaccountType] = useState('');
	const [categoryTypes, setCategoryTypes] = useState([]);
	const [subcategoryTypes, setSubcategoryTypes] = useState([]);
	const [subaccountTypes, setSubaccountTypes] = useState([]);
	const [showAddExpensesDetails,setShowAddExpensesDetails] = useState(false);

	const onSubmit = (event) => {
        createExpense(name,cost,expenseType,currentMonthId,categoryType,subcategoryType,accountType,subaccountType);
		updateBalance(cost,subaccountType);
	};
	const getCategoryTypes = async(expense_type) =>{
		const res = await fetch(backend_url+'/categoryTypes?expense_type='+expense_type)
		const data = await res.json()
		setCategoryTypes(data)
	  }
	  
	  const getSubcategoryTypes = async(category_type) =>{
		const res = await fetch(backend_url+'/subcategoryTypes?category_type='+category_type)
		const data = await res.json()
		setSubcategoryTypes(data)
	  }
	  
	  const getSubAccountTypes = async(account_type) =>{
		const res = await fetch(backend_url+'/subaccountTypes?account_type='+account_type)
		const data = await res.json()
		setSubaccountTypes(data)
	  }
	  

	const handleExpenseTypeChange = (event) => {
        setExpenseType(event.target.value);
		getCategoryTypes(event.target.value);
		setShowAddExpensesDetails(true)
        console.log(event.target.value);
      };

	const handleCategoryTypeChange = (event) => {
        setCategoryType(event.target.value);
		getSubcategoryTypes(event.target.value);
        console.log(event.target.value);
      };
	
	const handleSubcategoryTypeChange= (event) => {
        setSubcategoryType(event.target.value);
        console.log(event.target.value);
      };
	
	const handleAccountTypeChange = (event) => {
        setAccountType(event.target.value)
		getSubAccountTypes(event.target.value)
        console.log(event.target.value);
      };
	
	const handleSubaccountTypeChange = (event) => {
        setSubaccountType(event.target.value);
        console.log(event.target.value);
      };

	return (
		<form className='text-center'onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
						placeholder='Name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
						placeholder='Cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
				
                    <select required='required' onChange={handleExpenseTypeChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Expense Type</option>
                        {expenseTypes.map((expense_type)=>(
                        <option value={expense_type.id}>{expense_type.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			{showAddExpensesDetails?<div>
			<div className='row'>
				<div className='col-sm'>
				<label for='subaccountType'></label>
                    <select required='required' onChange={handleCategoryTypeChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Category Type</option>
                        {categoryTypes.map((category_type)=>(
                        <option value={category_type.id}>{category_type.name}</option>   
                        ))}
                    </select>
                </div>
			 
				<div className='col-sm'>
				<label for='subaccountType'></label>
                    <select required='required' onChange={handleSubcategoryTypeChange} className='form-control'>
						<option value="" selected disabled hidden> Choose SubCategory Type</option>
                        {subcategoryTypes.map((sub_category_type)=>(
                        <option value={sub_category_type.id}>{sub_category_type.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			<div className='row'>
				<div className='col-sm'>
				<label for='subaccountType'></label>
                    <select required='required' onChange={handleAccountTypeChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Account Type</option>
                        {accountTypes.map((account_type)=>(
                        <option value={account_type.id}>{account_type.name}</option>   
                        ))}
                    </select>
                </div>
				<div className='col-sm'> 
				<label for='subaccountType'></label>
                    <select required='required' onChange={handleSubaccountTypeChange} className='form-control'>
						<option value="" selected disabled hidden> Choose Sub Account Type</option>
                        {subaccountTypes.map((sub_account_type)=>(
                        <option value={sub_account_type.id}>{sub_account_type.name}</option>   
                        ))}
                    </select>
                </div>
			</div>
			</div>:null}
			<div className='row'>
				<div className='col-sm text-center'>
					<button type='submit' className='btn btn-secondary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;