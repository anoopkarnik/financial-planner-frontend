import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Item = ({budget,backend_url, accountTypes}) => {

    const [showForm, setShowForm] = useState(false)
    const [name, setName] = useState(budget.name)
    const [cost, setCost] = useState(budget.cost)
    const [expenseType,setExpenseType] = useState(budget.expense_type)
    const [categoryType,setCategoryType] = useState(budget.category_type)
    const [subcategoryType,setSubCategoryType] = useState(budget.sub_category_type)
    const [accountType, setAccountType] = useState('')
    const [subaccountTypes,setSubaccountTypes] = useState([])
    const [subaccountType,setSubaccountType] = useState('')
    const [id,setId] = useState(budget.id)

    const getSubAccountTypes = async(account_type) =>{
      const res = await fetch(backend_url+'/subaccountTypes?account_type='+account_type)
      const data = await res.json()
      setSubaccountTypes(data)
    }
  

    const createExpense = async(name,cost,expense_type,category_type,sub_category_type,account_type,sub_account_type) => {
        fetch(backend_url+'/monthlyExpense', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, cost,expense_type,category_type,sub_category_type,account_type,sub_account_type})
        })
      }

      const updateBalance = async(cost,sub_account_type) => {
        fetch(backend_url+'/updateBalance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({cost,sub_account_type}),
        })
      }

      const deleteBudget = async(id) =>{
        await axios.delete(backend_url+`/monthlyBudget/${id}`)
      }

    const handleAccountTypeChange = (event) =>{
      setAccountType(event.target.value)
      getSubAccountTypes(event.target.value)
    }

    const handleSubaccountTypeChange = (event) =>{
        setSubaccountType(event.target.value)
    }

    const onSubmit = () =>{
      createExpense(name,cost,expenseType,categoryType,subcategoryType,accountType,subaccountType);
      updateBalance(cost,subaccountType);
      deleteBudget(id);
    }
    
	
	return (
    <div>
		<li className='list-group-item d-flex justify-content-between align-items-center'>
          <div style={budget.active===true?{}:{textDecoration:'line-through'}} className='col-9'>
            {budget.name}
          </div>
				  <span style={budget.active===true?{}:{textDecoration:'line-through'}} className='badge-primary badge-pill mr-3 col-sm'>
					  Rs {budget.cost}
				  </span>
        <button onClick={()=> setShowForm(!showForm)} className='badge-primary badge-pill mr-3 col-2'>
					Add Transaction
				</button>
		</li>
    {showForm?<form className='row text-center'onSubmit={onSubmit}>
      <div>
				  <div className='col-sm'>
				    <input required='required' type='text'className='form-control'
						  id='name'	placeholder='Name'	value={name}onChange={(event) => setName(event.target.value)}
					  ></input>
				  </div>
				  <div className='col-sm'>
					  <input required='required' type='text' className='form-control'	id='cost'
          	  placeholder='Cost' value={cost}	onChange={(event) => setCost(event.target.value)}
					  ></input>
				  </div>
				  <div className='col-sm'>
            <select required='required' onChange={handleAccountTypeChange} className='form-control'>
						    <option value="" selected disabled hidden> Choose Account Type</option>
                        {accountTypes.map((account_type)=>(
                <option value={account_type.id}>{account_type.name}</option>   
                        ))}
            </select>
          </div>
				  <div className='col-sm'> 
            <select required='required' onChange={handleSubaccountTypeChange} className='form-control'>
						  <option value="" selected disabled hidden> Choose Sub Account Type</option>
                {subaccountTypes.map((sub_account_type)=>(
              <option value={sub_account_type.id}>{sub_account_type.name}</option>   
                ))}
            </select>
          </div>
				  <div className='col-sm text-center'>
					  <button type='submit' className='btn btn-secondary mt-3'>
						  Save
					  </button>
				  </div>
      </div>
      
      </form>:null}
      </div>
	);
};

export default Item;