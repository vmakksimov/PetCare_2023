export const PetDetail = ({ pet }) => {
    return (
        <>
            <div className="personal-pet-image">
                <img src={pet.image} alt="" />
            </div>
            <div className="personal-pet-details">
                <p>Name: {pet.name} </p>
                <p>Age: {pet.age}</p>
                <p>Kind: {pet.kind} </p>
                <p>Gender: {pet.gender}</p>
            </div>
        </>
    )
}