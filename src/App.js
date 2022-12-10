import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './components/Tasks';
import Timer from './components/Timer';
import NavHeader from './components/Nav';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavHeader />

				<Routes>
					<Route path='/' element={<Timer />}></Route>
					<Route path='/tasks' element={<Tasks />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
