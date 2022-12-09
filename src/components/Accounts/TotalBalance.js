import React from 'react'

const TotalBalance = ({totalBalance}) => {
  return (
    <div className='alert alert-success'>
        <span>Total Balance: Rs {totalBalance.sum}</span>
    </div>
  )
}

export default TotalBalance