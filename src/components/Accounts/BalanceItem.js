import React from 'react'

const BalanceItem = ({id,name,balance}) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
    {name}
    <div>
      <span className='badge-primary badge-pill mr-3'>
        Rs {balance}
      </span>
    </div>
    </li>
  )
}

export default BalanceItem