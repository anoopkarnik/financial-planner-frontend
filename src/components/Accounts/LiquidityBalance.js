import React from 'react'

const LiquidityBalance = ({liquidityBalance}) => {
  return (
    <div className='alert alert-primary'>
        <span>Liquidity: Rs {liquidityBalance.sum}</span>
    </div>
  )
}

export default LiquidityBalance