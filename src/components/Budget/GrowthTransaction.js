import React from 'react'

const GrowthBudget = ({growthTransaction,totalBudget}) => {
  return (
    <div className='alert alert-danger'>
        <span>Growth Transaction: {parseFloat(growthTransaction.sum*100/totalBudget.sum).toFixed(2)} %</span>
    </div>
  )
}

export default GrowthBudget