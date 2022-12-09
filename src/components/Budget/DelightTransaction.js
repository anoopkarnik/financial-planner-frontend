import React from 'react'

const DelightBudget = ({delightTransaction,totalBudget}) => {
  return (
    <div className='alert alert-danger'>
        <span>Delight Transaction: {parseFloat(delightTransaction.sum*100/totalBudget.sum).toFixed(2)} %</span>
    </div>
  )
}

export default DelightBudget