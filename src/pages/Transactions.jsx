import React from 'react';
import ExpenseList from '../components/Transactions/ExpenseList';
import Budget from '../components/Transactions/Budget';
import Remaining from '../components/Transactions/Remaining';
import UnplannedExpenseTotal from '../components/Transactions/UnplannedExpenseTotal';
import MonthlyPlannedExpenseTotal from '../components/Transactions/MonthlyPlannedExpenseTotal';
import AddExpenseForm from '../components/Transactions/AddExpenseForm';
import SelectMonth from '../components/Selections/SelectMonth';
import { useEffect,useState } from 'react';
import {format} from "date-fns";
import SelectExpenseTypes from '../components/Selections/SelectExpenseTypes';
import SelectAccountTypes from '../components/Selections/SelectAccountTypes';
import SelectCategoryTypes from '../components/Selections/SelectCategoryTypes';


const Transactions = () => {
  const [totalIncome, setTotalIncome] = useState(false);
  const [remaining, setRemaining] = useState(false);
  const [totalUnplannedExpense, setTotalUnplannedExpense] = useState(false);
  const [totalMonthlyPlannedExpense, setTotalMonthlyPlannedExpense] = useState(false);
  const [unplannedExpenses, setUnplannedExpenses] = useState([]);
  const [monthlyPlannedExpenses, setMonthlyPlannedExpenses] = useState([]);
  const [months, setMonths] = useState([]);
  const [currentMonthId, setCurrentMonthId] = useState("2");
  const [expenseTypes, setExpenseTypes] = useState([]);
  const [currentExpenseTypes, setCurrentExpenseTypes] = useState(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21']);
  const [currentAccountTypes, setCurrentAccountTypes] = useState(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21']);
  const [currentCategoryTypes, setCurrentCategoryTypes] = useState(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']);
  const [showPlannedExpanses,setShowPlannedExpanses] = useState(true)
  const [showUnplannedExpanses,setShowUnplannedExpanses] = useState(true)
  const [showAddExpenses,setShowAddExpenses] = useState(false);
  const [accountTypes, setAccountTypes] = useState([]);
  const [allCategoryTypes, setAllCategoryTypes] = useState([]);

  useEffect(() => {
      getMonth(currentMonthId);
    }, []);

const backend_url = 'http://financial-planner.anoopkarnik.net:3002';

  const getTotalIncome = async(start_time,end_time) =>{
      const res = await fetch(backend_url+'/totalincome?start_time='+start_time+'&end_time='+end_time)
      const data = await res.json()
      setTotalIncome(data)
  }

  const getRemaining = async(start_time,end_time) =>{
    const res = await fetch(backend_url+'/remaining?start_time='+start_time+'&end_time='+end_time)
    const data = await res.json()
    setRemaining(data)
}

  const getTotalUnplannedExpense = async(start_time,end_time) =>{
    const res = await fetch(backend_url+'/totalunplannedexpense?start_time='+start_time+'&end_time='+end_time)
    const data = await res.json()
    setTotalUnplannedExpense(data)
  }

  const getTotalMonthlyPlannedExpense = async(start_time,end_time) =>{
    const res = await fetch(backend_url+'/totalmonthlyplannedexpense?start_time='+start_time+'&end_time='+end_time)
    const data = await res.json()
    setTotalMonthlyPlannedExpense(data)
  }

  const getUnplannedExpenses = async(expense_types,account_types,category_types,start_time,end_time) =>{
    const res = await fetch(backend_url+'/unplannedExpenses?start_time='+start_time+'&end_time='+end_time, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({expense_types,account_types,category_types}),
    })
    const data = await res.json()
    setUnplannedExpenses(data)
}

const getMonthlyPlannedExpenses = async(expense_types,account_types,category_types,start_time,end_time) =>{
  const res = await fetch(backend_url+'/monthlyPlannedExpenses?start_time='+start_time+'&end_time='+end_time, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({expense_types,account_types,category_types}),
  })
  const data = await res.json()
  setMonthlyPlannedExpenses(data)
}


const getMonths = async() =>{
  const res = await fetch(backend_url+'/months')
  const data = await res.json()
  setMonths(data)
}

const getExpenseTypes = async() =>{
  const res = await fetch(backend_url+'/expenseType')
  const data = await res.json()
  setExpenseTypes(data)
}

const getAccountTypes = async() =>{
  const res = await fetch(backend_url+'/accountTypes')
  const data = await res.json()
  setAccountTypes(data)
  }

  const getAllCategoryTypes = async() =>{
    const res = await fetch(backend_url+'/allCategoryTypes')
    const data = await res.json()
    setAllCategoryTypes(data)
    }

const getMonth = async(id,current_expense_type=currentExpenseTypes,current_account_type=currentAccountTypes,current_category_type=currentCategoryTypes) =>{
  setCurrentExpenseTypes(current_expense_type)
  setCurrentAccountTypes(current_account_type)
  setCurrentCategoryTypes(current_category_type)
  const res = await fetch(backend_url+'/month?id='+id)
  const data = await res.json()
  var start_date = new Date(data.start_time)
  var end_date = new Date(data.end_time)
  const start_time = format(start_date,"yyyy-MM-dd")
  const end_time = format(end_date,"yyyy-MM-dd")
  await refreshPage(start_time,end_time,current_expense_type,current_account_type,current_category_type)
}


const refreshPage = async(start_time,end_time,current_expense_type,current_account_type,current_category_type) => {
  await getUnplannedExpenses(current_expense_type,current_account_type,current_category_type,start_time,end_time);
  await getMonthlyPlannedExpenses(current_expense_type,current_account_type,current_category_type,start_time,end_time);
  await getTotalUnplannedExpense(start_time,end_time);
  await getTotalMonthlyPlannedExpense(start_time,end_time);
  await getTotalIncome(start_time,end_time);
  await getRemaining(start_time,end_time);
  await getMonths();
  await getExpenseTypes();
  await getAccountTypes();
  await getAllCategoryTypes();
}

const createExpense = async(name,cost,expense_type,monthId,category_type,sub_category_type,account_type,sub_account_type) => {
  fetch(backend_url+'/expense', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, cost,expense_type,category_type,sub_category_type,account_type,sub_account_type}),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      getMonth(monthId);
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
    .then(response => {
      return response.text();
    });
}

	return (
    <div>
		<div className='row mt-3'>
					<div className='col-sm'>
						<Budget totalIncome={totalIncome}/>
					</div>
					<div className='col-sm'>
						<Remaining remaining={remaining} totalIncome={totalIncome}/>
					</div>
					<div className='col-sm' onClick={()=>setShowUnplannedExpanses(!showUnplannedExpanses)}>
						<UnplannedExpenseTotal totalUnplannedExpense={totalUnplannedExpense}/>
					</div>
          <div className='col-sm' onClick={()=>setShowPlannedExpanses(!showPlannedExpanses)}>
						<MonthlyPlannedExpenseTotal totalMonthlyPlannedExpense={totalMonthlyPlannedExpense}/>
					</div>
				</div>
			<h3 className='mt-3 text-center'>Transactions</h3>
      <div className='row mt-3'>
					<SelectMonth  months = {months} getMonth={getMonth} currentExpenseTypes={currentExpenseTypes} currentAccountTypes={currentAccountTypes} currentCategoryTypes={currentCategoryTypes}/>
          <SelectExpenseTypes  currentMonthId = {currentMonthId} getMonth={getMonth} expenseTypes={expenseTypes} currentAccountTypes={currentAccountTypes} currentCategoryTypes={currentCategoryTypes}/>
          <SelectAccountTypes currentMonthId = {currentMonthId} getMonth={getMonth} currentExpenseTypes={currentExpenseTypes} accountTypes={accountTypes} currentCategoryTypes={currentCategoryTypes}/>
          <SelectCategoryTypes currentMonthId = {currentMonthId} getMonth={getMonth} currentExpenseTypes={currentExpenseTypes} allCategoryTypes={allCategoryTypes} currentAccountTypes={currentAccountTypes}/>
      </div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<ExpenseList showPlannedExpanses={showPlannedExpanses} showUnplannedExpanses={showUnplannedExpanses} monthlyPlannedExpenses={monthlyPlannedExpenses} unplannedExpenses={unplannedExpenses} getMonth={getMonth} currentMonthId={currentMonthId} backend_url={backend_url} updateBalance={updateBalance}/>
				</div>
			</div>
      <h3 onClick={()=>{setShowAddExpenses(!showAddExpenses)}} className='mt-3 text-center'><div className='btn btn-secondary btn-lg'>Add Unplanned Expense</div></h3>
			{showAddExpenses?<AddExpenseForm createExpense={createExpense} updateBalance={updateBalance} currentMonthId={currentMonthId} expenseTypes={expenseTypes} backend_url={backend_url} accountTypes={accountTypes}/>:null}
      </div>
	);
};

export default Transactions;