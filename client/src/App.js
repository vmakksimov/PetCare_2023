import logo from './logo.svg';
import './App.css';
import './styles/css/styles.css'

import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import * as petsService from './services/petsService'
import { Home } from './components/Home/Home';


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
				<Home pets={pets}/>
			</div>
		</div>
	);
}

export default App;
