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
import { Logout } from './components/Logout/Logout';
import { PetsContext } from './components/context/PetsContext';
import { MyPets } from './components/MyPets/PetsList';
import { CreatePet } from './components/CreatePet/CreatePet';


function App() {
	const [user, setAuth] = useLocalStorage('auth', {})
	const [pets, setPet] = useState([])

	const userLogin = (authData) => {
		setAuth(authData)
	}

	const userLogout = () => {
		setAuth({})
	}


	useEffect(() => {
		petsService.getPets()
			.then(res => setPet(Object.values(res)))

	}, [])

	return (
		<AuthContext.Provider value={{ user, userLogin, userLogout }}>
			<div className="App">
				<Header />
				<PetsContext.Provider value={{ pets }}>
					<div className='main-app'>
						<Routes>
							<Route path='/' element={<Home pets={pets} />} />
							<Route path='/register' element={<Register />} />
							<Route path='/login' element={<Login />} />
							<Route path='/logout' element={<Logout />} />
							<Route path='/mypets' element={<MyPets />} />
							<Route path='/create-pet' element={<CreatePet/>}/>
						</Routes>
					</div>
				</PetsContext.Provider>
				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
