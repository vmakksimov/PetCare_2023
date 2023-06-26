import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as PetService from '../../services/petsService'
import { AuthContext } from '../context/AuthContext';
import './CreatePet.css'

export const CreatePet = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const petsData = Object.fromEntries(new FormData(e.target))
        const formData = new FormData(e.target);
        const name = formData.get('name')
        const age = formData.get('author')
        const gender = formData.get('year')
        const kind = formData.get('summary')
        const cover = formData.get('image')
        // form_data.append("image_url", e.target.image_url, e.target.image_url.name);
        console.log(cover)


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
                            <input type="file" name="image" accept="image/jpeg,image/png,image/gif" /><br /><br />
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