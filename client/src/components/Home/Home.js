import './Home.css'

export const Home = ({pets}) => {
    console.log(pets)

    const aya = pets.find(x => x.name == 'Aya' && 'true')
    console.log(aya)
    return (
        <div className="home-content">
            <section className='image-content'>
                <img src={aya.image} alt="Aya" ></img>
            </section>
            
        </div>
    )
}