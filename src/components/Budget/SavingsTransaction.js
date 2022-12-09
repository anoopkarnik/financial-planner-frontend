import React from 'react'

const SavingsBudget = ({savingsTransaction,totalBudget}) => {
  return (
    <div className='alert alert-danger'>
        <span>Savings Transaction: {parseFloat(savingsTransaction.sum*100/totalBudget.sum).toFixed(2)} %</span>
    </div>
  )
}

export default SavingsBudget