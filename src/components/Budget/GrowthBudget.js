import React from 'react'

const GrowthBudget = ({growthBudget,totalBudget,growthPlanBudget}) => {
  return (
    <div className='alert alert-success'>
        <span>Growth Budget: {parseFloat(growthBudget.sum*100/totalBudget.sum).toFixed(2)}/{growthPlanBudget.plan_percentage} %</span>
    </div>
  )
}

export default GrowthBudget