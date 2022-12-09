
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Topbar from './components/common/Topbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Budget from './pages/Budget';
import Portfolio from './pages/Portfolio';
import Sidebar from './components/common/Sidebar';
import Layout from './components/layout/Layout';

function App() {

  	return (
		<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Transactions/>}/>
						<Route path="/transactions" element={<Transactions/>}/>
						<Route path="/accounts" element={<Accounts/>}/>
						<Route path="/budget" element={<Budget/>}/>
						<Route path="/portfolio" element={<Portfolio/>}/>
					</Routes>
					</Layout>
		</BrowserRouter>
   
  	);
}

export default App;