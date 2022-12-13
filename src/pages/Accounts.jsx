import React from 'react';
import { useEffect,useState } from 'react';
import BalanceList from '../components/Accounts/BalanceList';
import BalanceItem from '../components/Accounts/BalanceItem';
import FreeLiquidityBalance from '../components/Accounts/FreeLiquidityBalance';
import LiquidityBalance from '../components/Accounts/LiquidityBalance';
import TotalBalance from '../components/Accounts/TotalBalance';


const Accounts = () => {

  const [allBalances,setAllBalances] = useState([]);
  const [totalBalance, setTotalBalance] = useState(false);
  const [liquidityBalance, setLiquidityBalance] = useState(false);
  const [freeLiquidityBalance, setFreeLiquidityBalance] = useState(false);

  useEffect(() => {
      refreshPage()
    }, []);

const backend_url = 'http://financial-planner.anoopkarnik.net:3002';

  const getAllBalances = async() =>{
    const res = await fetch(backend_url+'/getBalances')
    const data = await res.json()
    setAllBalances(data);
  }

  const getTotalBalance = async() =>{
    const res = await fetch(backend_url+'/getTotalBalance')
    const data = await res.json()
    setTotalBalance(data);
  }

  const getLiquidityBalance = async() =>{
    const res = await fetch(backend_url+'/getLiquidityBalance')
    const data = await res.json()
    setLiquidityBalance(data);
  }

  const getFreeLiquidityBalance = async() =>{
    const res = await fetch(backend_url+'/getFreeLiquidityBalance')
    const data = await res.json()
    setFreeLiquidityBalance(data);
  }

  const refreshPage= async() =>{
    await getAllBalances();
    await getTotalBalance();
    await getLiquidityBalance();
    await getFreeLiquidityBalance();
  }


	return (
    <div>
		<div className='row mt-3'>
					<div className='col-sm'>
						<TotalBalance totalBalance={totalBalance}/>
					</div>
					<div className='col-sm'>
						<LiquidityBalance liquidityBalance={liquidityBalance}/>
					</div>
					<div className='col-sm'>
						<FreeLiquidityBalance freeLiquidityBalance={freeLiquidityBalance}/>
					</div>
				</div>
			<h3 className='mt-3 text-center'>Account Balances</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
          <BalanceList allBalances={allBalances}/>
				</div>
			</div>
      </div>
	);
};

export default Accounts;