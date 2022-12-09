import React from 'react'

const LivingBudget = ({livingTransaction,totalBudget}) => {
  return (
    <div className='alert alert-danger'>
        <span>Living Transaction: {parseFloat(livingTransaction.sum*100/totalBudget.sum).toFixed(2)} %</span>
    </div>
  )
}

export default LivingBudget