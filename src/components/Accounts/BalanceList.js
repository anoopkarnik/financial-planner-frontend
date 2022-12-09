import React from 'react'
import BalanceItem from './BalanceItem'

const BalanceList = ({allBalances}) => {
  return (
    <ul className='list-group'>

<div>
			{allBalances.map((Balance) => (
				<BalanceItem id={Balance.id} name={Balance.name} balance={Balance.balance}/>
			))}</div>
		</ul>
  )
}

export default BalanceList