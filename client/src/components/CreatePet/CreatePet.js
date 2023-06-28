import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as PetService from '../../services/petsService'
import { AuthContext } from '../context/AuthContext';
import './CreatePet.css'

export const CreatePet = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


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
      

        // const addComment = (gameId, comment) => {
        //     setGames(state => {
    
        //         const game = state.find(x => x._id == gameId);
        //         const comments = game.comments || [];
    
        //         comments.push(comment)
    
        //         return [
        //             ...state.filter(x => x._id !== gameId),
        //             { ...game, comments }
    
        //         ]
        //     })
        // }


        PetService.createPet(petsData)
            .then(res => console.log(res))


    }
    return (
        <div className="container-register">
            <div className="title sign">Add Pet</div>
            <div className="content">
                <form onSubmit={onSubmit}>
                    <div className="game-details">
                        <div className="input-box">
                            <span className="details">Name</span>
                            <input type="text" name="name" placeholder="Enter Name" required />

                        </div>
                        <div className="input-box">
                            <span className="details">Age</span>
                            <input type="text" name="age" placeholder="Enter Age" required />

                        </div>
                        <div className="input-box">
                            <span className="details">Gender</span>
                            <input type="text" name="gender" placeholder="Enter Gender" required />

                        </div>
                        <div className="input-box">
                            <span className="details">Summary</span>
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
                        <div className="input-box">
                            <span className="details">Image</span>
                            <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="user" defaultValue={user._id} />
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