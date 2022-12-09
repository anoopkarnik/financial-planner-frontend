import React from 'react'

const SavingsBudget = ({savingsBudget,totalBudget,savingsPlanBudget}) => {
  return (
    <div className='alert alert-success'>
        <span>Savings Budget: {parseFloat(savingsBudget.sum*100/totalBudget.sum).toFixed(2)}/{savingsPlanBudget.plan_percentage} %</span>
    </div>
  )
}

export default SavingsBudget