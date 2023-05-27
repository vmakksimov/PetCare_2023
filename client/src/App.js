import logo from './logo.svg';
import './App.css';
import './styles/css/styles.css'
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import * as petsService from './services/petsService'
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';


function App() {
	const [pets, setPet] = useState([])

	useEffect(() => {
		petsService.getPets()
			.then(res => setPet(Object.values(res)))

	}, [])

	return (
		<div className="App">
			<Header />

			<div className='main-app'>
				<Routes>
					<Route path='/' element={<Home pets={pets} />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
