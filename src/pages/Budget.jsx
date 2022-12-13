import React from 'react'
import { useEffect,useState } from 'react';
import LivingBudgetList from '../components/Budget/LivingBudgetList';
import LivingBudget from '../components/Budget/LivingBudget';
import SavingsBudget from '../components/Budget/SavingsBudget';
import DelightBudget from '../components/Budget/DelightBudget';
import GrowthBudget from '../components/Budget/GrowthBudget';
import LivingTransaction from '../components/Budget/LivingTransaction';
import SavingsTransaction from '../components/Budget/SavingsTransaction';
import DelightTransaction from '../components/Budget/DelightTransaction';
import GrowthTransaction from '../components/Budget/GrowthTransaction';
import {format, set} from "date-fns";
import DelightBudgetList from '../components/Budget/DelightBudgetList';
import GrowthBudgetList from '../components/Budget/GrowthBudgetList';
import SavingsBudgetList from '../components/Budget/SavingsBudgetLIst';

const Budget = () => {

  const [totalBudget,setTotalBudget] = useState(false);
  const [livingBudget, setLivingBudget] = useState(false);
  const [delightBudget, setDelightBudget] = useState(false);
  const [growthBudget, setGrowthBudget] = useState(false);
  const [savingsBudget, setSavingsBudget] = useState(false);
  const [livingPlanBudget, setLivingPlanBudget] = useState(false);
  const [delightPlanBudget, setDelightPlanBudget] = useState(false);
  const [growthPlanBudget, setGrowthPlanBudget] = useState(false);
  const [savingsPlanBudget, setSavingsPlanBudget] = useState(false);
  const [livingTransaction, setLivingTransaction] = useState(false);
  const [delightTransaction, setDelightTransaction] = useState(false);
  const [growthTransaction, setGrowthTransaction] = useState(false);
  const [savingsTransaction, setSavingsTransaction] = useState(false);
  const [currentMonthId, setCurrentMonthId] = useState("2");
  const [livingBudgets,setLivingBudgets] = useState([]);
  const [growthBudgets,setGrowthBudgets] = useState([]);
  const [delightBudgets,setDelightBudgets] = useState([]);
  const [savingsBudgets,setSavingsBudgets] = useState([]);
  const [accountTypes, setAccountTypes] = useState([]);

  useEffect(() => {
      getMonth(currentMonthId)
    }, []);

const backend_url = 'http://financial-planner.anoopkarnik.net:3002';

const getMonth = async(id) =>{
  const res = await fetch(backend_url+'/month?id='+id)
  const data = await res.json()
  var start_date = new Date(data.start_time)
  var end_date = new Date(data.end_time)
  const start_time = format(start_date,"yyyy-MM-dd")
  const end_time = format(end_date,"yyyy-MM-dd")
  await refreshPage(start_time,end_time)
}

const getAccountTypes = async() =>{
  const res = await fetch(backend_url+'/accountTypes')
  const data = await res.json()
  setAccountTypes(data)
  }

const getTotalIncome = async(start_time,end_time) =>{
  const res = await fetch(backend_url+'/totalincome?start_time='+start_time+'&end_time='+end_time)
  const data = await res.json()
  setTotalBudget(data)
}

const getLivingBudget= async() =>{
  const res = await fetch(backend_url+'/getBudget?expense_type=1')
  const data = await res.json()
  setLivingBudget(data)
}

const getDelightBudget= async() =>{
  const res = await fetch(backend_url+'/getBudget?expense_type=2')
  const data = await res.json()
  setDelightBudget(data)
}

const getGrowthBudget= async() =>{
  const res = await fetch(backend_url+'/getBudget?expense_type=3')
  const data = await res.json()
  setGrowthBudget(data)
}

const getSavingsBudget= async() =>{
  const res = await fetch(backend_url+'/getBudget?expense_type=4')
  const data = await res.json()
  setSavingsBudget(data)
}

const getLivingPlanBudget= async() =>{
  const res = await fetch(backend_url+'/getTotalBudget?expense_type=1')
  const data = await res.json()
  setLivingPlanBudget(data)
}

const getDelightPlanBudget= async() =>{
  const res = await fetch(backend_url+'/getTotalBudget?expense_type=2')
  const data = await res.json()
  setDelightPlanBudget(data)
}

const getGrowthPlanBudget= async() =>{
  const res = await fetch(backend_url+'/getTotalBudget?expense_type=3')
  const data = await res.json()
  setGrowthPlanBudget(data)
}

const getSavingsPlanBudget= async() =>{
  const res = await fetch(backend_url+'/getTotalBudget?expense_type=7')
  const data = await res.json()
  setSavingsPlanBudget(data)
}

const getLivingTransaction= async() =>{
  const res = await fetch(backend_url+'/getTransactions?expense_type=1')
  const data = await res.json()
  setLivingTransaction(data)
}

const getDelightTransaction= async() =>{
  const res = await fetch(backend_url+'/getTransactions?expense_type=2')
  const data = await res.json()
  setDelightTransaction(data)
}

const getGrowthTransaction= async() =>{
  const res = await fetch(backend_url+'/getTransactions?expense_type=3')
  const data = await res.json()
  setGrowthTransaction(data)
}

const getSavingsTransaction= async() =>{
  const res = await fetch(backend_url+'/getTransactions?expense_type=7')
  const data = await res.json()
  setSavingsTransaction(data)
}

const getLivingBudgets = async() =>{
  const res = await fetch(backend_url+'/getAllBudget?expense_type=1')
  const data = await res.json()
  setLivingBudgets(data)
  }

const getGrowthBudgets = async() =>{
	const res = await fetch(backend_url+'/getAllBudget?expense_type=3')
	const data = await res.json()
	setGrowthBudgets(data)
	}

const getDelightBudgets = async() =>{
	const res = await fetch(backend_url+'/getAllBudget?expense_type=2')
	const data = await res.json()
	setDelightBudgets(data)
	}

const getSavingsBudgets = async() =>{
	const res = await fetch(backend_url+'/getAllBudget?expense_type=7')
	const data = await res.json()
	setSavingsBudgets(data)
	}

  const refreshPage= async(start_time,end_time) =>{
    await getLivingBudgets();
    await getGrowthBudgets();
    await getDelightBudgets();
    await getSavingsBudgets();
    await getTotalIncome(start_time,end_time);
    await getLivingBudget();
    await getDelightBudget();
    await getGrowthBudget();
    await getSavingsBudget();
    await getLivingTransaction();
    await getDelightTransaction();
    await getGrowthTransaction();
    await getSavingsTransaction();
    await getAccountTypes();
    await getDelightPlanBudget();
    await getGrowthPlanBudget();
    await getLivingPlanBudget();
    await getSavingsPlanBudget();
  }

  return (
      <div>
		<div className='row mt-3'>
			<div className='col-sm'>
				<LivingBudget livingBudget={livingBudget} totalBudget={totalBudget} livingPlanBudget={livingPlanBudget}/>
			</div>
			<div className='col-sm'>
        <DelightBudget delightBudget={delightBudget} totalBudget={totalBudget} delightPlanBudget={delightPlanBudget}/>
			</div>
			<div className='col-sm'>
        <GrowthBudget growthBudget={growthBudget} totalBudget={totalBudget} growthPlanBudget={growthPlanBudget}/>
			</div>
      <div className='col-sm'>
        <SavingsBudget savingsBudget={savingsBudget} totalBudget={totalBudget} savingsPlanBudget={savingsPlanBudget}/>
		  </div>
	</div>
  <div className='row mt-3'>
			<div className='col-sm'>
				<LivingTransaction livingTransaction={livingTransaction} totalBudget={totalBudget}/>
			</div>
			<div className='col-sm'>
        <DelightTransaction delightTransaction={delightTransaction} totalBudget={totalBudget}/>
			</div>
			<div className='col-sm'>
        <GrowthTransaction growthTransaction={growthTransaction} totalBudget={totalBudget}/>
			</div>
      <div className='col-sm'>
        <SavingsTransaction savingsTransaction={savingsTransaction} totalBudget={totalBudget}/>
		  </div>
	</div>
        <h3 className='mt-3 text-center'>Budget</h3>
  <div className='row mt-3'>
		<div className='col-sm'>
      <LivingBudgetList livingBudgets={livingBudgets} backend_url={backend_url} accountTypes={accountTypes}/>
		</div>
	</div>
  <div className='row mt-3'>
		<div className='col-sm'>
      <DelightBudgetList delightBudgets={delightBudgets} backend_url={backend_url} accountTypes={accountTypes}/>
		</div>
	</div>
  <div className='row mt-3'>
		<div className='col-sm'>
      <GrowthBudgetList growthBudgets={growthBudgets} backend_url={backend_url} accountTypes={accountTypes}/>
		</div>
	</div>
  <div className='row mt-3'>
		<div className='col-sm'>
      <SavingsBudgetList savingsBudgets={savingsBudgets} backend_url={backend_url} accountTypes={accountTypes}/>
		</div>
	</div>
    </div>
  )
}

export default Budget