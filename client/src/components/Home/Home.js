import './Home.css'
import animals from '../../styles/images/kindpng_2140500.png'
import paw from '../../styles/images/paw.png'


export const Home = ({pets}) => {

    const pet = pets.find(x => x.name == 'Aya' && 'true')
    console.log(pet)

    return (
        <div className="home-content">
            <section className='title-content'>
                <h2><strong>Day Care</strong></h2>
                <img src={paw} alt="" />
            </section>
            <section className='image-content'>
                {/* {pet !== undefined && <img src={pet.image} alt="Aya" ></img>} */}
               <h1>Animals</h1>
               <img src={animals} alt="" />
                
            </section>
            
            
        </div>
    )
}