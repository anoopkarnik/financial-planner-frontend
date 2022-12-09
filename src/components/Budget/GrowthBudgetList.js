import Item from "./Item"
import { useState } from "react";

const GrowthBudgetList = ({growthBudgets,backend_url,accountTypes}) => {

	const [showItems,setShowItems] = useState(false)

  return (
	<div id="accordion">
  		<div class="card">
    		<div onClick={()=>setShowItems(!showItems)} class="card-header" id="headingOne">
      			<h5 class="mb-0">
        			<button onClick={()=>setShowItems(!showItems)} class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          				Growth Budget
        			</button>
      			</h5>
    		</div>
			{showItems ===true?
    		<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      			<div class="card-body">
	  				<ul className='list-group'>
						<div>
							{growthBudgets.map((budget) => (
								<Item budget={budget} backend_url={backend_url} accountTypes={accountTypes}/>
						))}</div>
					</ul>
      			</div>
    		</div>:null}
  		</div>
	</div>
  )
}

export default GrowthBudgetList

