import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as PetService from '../../services/petsService'
import { AuthContext } from '../context/AuthContext';
import './CreatePet.css'
import axios from 'axios'
import { PetsContext } from '../context/PetsContext';

export const CreatePet = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const {pets , addPetHandler} = useContext(PetsContext);


    const [photo, setImage] = useState({
        image: null,
    })


    const handleInputChange = (event) => {
        setImage({
            [event.target.name]: event.target.files[0]
            // image: event.target.files[0]
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const petsData = Object.fromEntries(new FormData(e.target))
        const formData = new FormData(e.target);
        console.log(photo)
        console.log(petsData)

        let url = 'http://127.0.0.1:8000/create-pet/';
        axios.post(url, petsData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res)
                addPetHandler(res)
                navigate('/mypets')
            })
            .catch(err => console.log(err))

       


    }
    return (
        <div className="container-register">
            <div className="title sign">Add Pet</div>
            <div className="content">
                <form encType="multipart/form-data" onSubmit={onSubmit}>
                    <div className="game-details">
                        <div className="input-box">
                            
                            <input type="text" name="name" placeholder="Enter Name" required />

                        </div>
                        <div className="input-box">
                            
                            <input type="text" name="age" placeholder="Enter Age" required />

                        </div>
                        <div className="input-box">
                           
                            <input type="text" name="gender" placeholder="Enter Gender" required />

                        </div>
                        <div className="input-box">
                            
                            <input type="text" name="summary" placeholder="Type summary" required />

                        </div>
                        <div className="input-box">
                            <span className="details">Kind</span>
                            <select name="kind">
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Parrot">Parrot</option>
                                <option value="Mice">Mice</option>
                                <option value="Fish">Fish</option>
                            </select>
                        </div>
                        <div className="image-box">
                            <span className="details">Image</span>
                            <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="owner" defaultValue={user._id} />
                        </div>
                    </div>

                    <div className="button-book">
                        <input type="submit" value="Add Pet" />
                    </div>
                </form>
            </div>
        </div>

    )
}