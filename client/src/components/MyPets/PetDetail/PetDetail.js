import './PetDetail.css'

export const PetDetail = ({ pet }) => {

    const onPetClick = (e) => {
        console.log(e.target.parentElement.parentElement)
        console.log(pet.id)
    }
    return (
        <>
            <div className="personal-pet-image" onClick={onPetClick}>
                <div className="pet-image">
                    <img src={pet.image} alt="" />
                </div>
                <div className="personal-pet-details">
                    <p>Name: {pet.name} </p>
                    <p>Age: {pet.age}</p>
                    <p>Kind: {pet.kind} </p>
                    <p>Gender: {pet.gender}</p>
                </div>
            </div>

        </>
    )
}