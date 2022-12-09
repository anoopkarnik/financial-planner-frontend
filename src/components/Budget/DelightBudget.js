import React from 'react'

const DelightBudget = ({delightBudget,totalBudget,delightPlanBudget}) => {
  return (
    <div className='alert alert-success'>
        <span> Delight Budget: {parseFloat(delightBudget.sum*100/totalBudget.sum).toFixed(2)}/{delightPlanBudget.plan_percentage} %</span>
    </div>
  )
}

export default DelightBudget