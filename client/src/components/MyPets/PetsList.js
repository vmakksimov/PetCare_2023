import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { PetsContext } from "../context/PetsContext";
import './MyPets.css'
import { PetDetail } from "./PetDetail/PetDetail";
export const MyPets = () => {

    const { pets } = useContext(PetsContext);
    const { user } = useContext(AuthContext)
    
    const ownerPets = pets.filter(x => x.owner_id == user._id)
 

    return (
        <div className="personal-pet-section">
            {ownerPets.length > 0
                ? ownerPets.map(x => <PetDetail key={x.id} pet={x} />)
                : <span>This user has no pets yet.</span>
            }
        </div>
    )
}