import React from 'react';

import { useEffect,useState } from 'react';

const Remaining = ({remaining,totalIncome}) => {

    
	return (
		<div className='alert alert-success'>
			<span>Remaining: Rs {remaining.sum == null ? totalIncome.sum : remaining.sum}</span>
		</div>
	);
};

export default Remaining;