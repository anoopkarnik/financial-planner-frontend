import React from 'react'

const LivingBudget = ({livingBudget,totalBudget,livingPlanBudget}) => {
  return (
    <div className='alert alert-success'>
        <span>Living Budget: {parseFloat(livingBudget.sum*100/totalBudget.sum).toFixed(2)}/{livingPlanBudget.plan_percentage} %</span>
    </div>
  )
}

export default LivingBudget