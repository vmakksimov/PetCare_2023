import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { PetsContext } from "../context/PetsContext";
import './MyPets.css'
import { PetDetail } from "./PetDetail/PetDetail";
import paws from '../../styles/images/paws.png'
import paw from '../../styles/images/paw.png'
import mypets from '../../styles/images/mypets.png'
import { Link } from "react-router-dom";

export const MyPets = () => {

    const { pets } = useContext(PetsContext);
    const { user } = useContext(AuthContext)

    console.log(pets)
    const ownerPets = pets.filter(x => x.owner == user._id)


    return (
        <article className='daycare-header'>
            <div className="home-content">
                <section className='title-content'>
                    <section className='title-buttons'>
                        <h1>My Pets</h1>
                        <p>Back to <strong><Link to='/'>Home</Link></strong></p>
                    </section>
                    <img src={paws} alt="" />
                </section>
                <section className='image-content'>
                    <img src={mypets} alt="animals" />
                </section>
            </div>

            <div className="personal-pet-section">
                {ownerPets.length > 0
                    ? ownerPets.map(x => <PetDetail key={x.id} pet={x} />)
                    : <span>This user has no pets yet.</span>
                }
            </div>
        </article>
    )
}