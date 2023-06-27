import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as PetService from '../../services/petsService'
import { AuthContext } from '../context/AuthContext';


export const CreatePet = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [photo, setProfilePhoto] = useState('')
    const [values, setValues] = useState({
        image: '',
    })

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(photo)

        const petsData = Object.fromEntries(new FormData(e.target))
        const formData = new FormData(e.target);
        const finalData = new FormData();
        const image1 = formData.get('image')
        console.log(image1[0])
   

        // const name = formData.get('name')
        // const kind = formData.get('kind')
        // const gender = formData.get('gender')
        // const age = formData.get('age')
        // const summary = formData.get('summary')
        // const image = formData.get('image')
        // const cover = Number(formData.get('user'))
        
        // finalData.append('name', name)
        // finalData.append('kind', kind)
        // finalData.append('gender', gender)
        // finalData.append('age', age)
        // finalData.append('summary', summary)
        // finalData.append('image', image)
        // finalData.append('user', cover)



        // form_data.append("image_url", e.target.image_url, e.target.image_url.name);
       
       
       
        // console.log(finalData)
        // console.log(finalData.get('user'))
       


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
                            <input type="file" name="image"   accept="image/*"  />
                        </div>
                        <div className="input-box">
                            <span className="details"></span>
                            <input type="hidden" name="user" />
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