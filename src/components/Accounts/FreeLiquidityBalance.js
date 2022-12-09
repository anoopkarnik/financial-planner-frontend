import React from 'react'

const FreeLiquidityBalance = ({freeLiquidityBalance}) => {
  return (
    <div className='alert alert-danger'>
        <span>Free Liquidity: Rs {freeLiquidityBalance.sum}</span>
    </div>
  )
}

export default FreeLiquidityBalance