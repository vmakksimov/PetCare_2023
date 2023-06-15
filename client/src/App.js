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
import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthContext } from './components/context/AuthContext';


function App() {
	const [user, setAuth] = useLocalStorage('auth', {})
	const [pets, setPet] = useState([])

	const userLogin = (authData) => {
		setAuth(authData)
	}


	useEffect(() => {
		petsService.getPets()
			.then(res => setPet(Object.values(res)))

	}, [])

	return (
		<AuthContext.Provider value={{userLogin}}>
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
		</AuthContext.Provider>
	);
}

export default App;
