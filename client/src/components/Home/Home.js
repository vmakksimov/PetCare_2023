import './Home.css'
import animals from '../../styles/images/kindpng_2140500.png'
import paw from '../../styles/images/paw.png'


export const Home = ({ pets }) => {

    const pet = pets.find(x => x.name == 'Aya' && 'true')
    console.log(pet)

    return (
        <article className='daycare-content'>
            <div className="home-content">
                <section className='title-content'>
                    <section className='title-buttons'>
                        <h1>Day Care</h1>
                        <h2>Your <strong>Pet</strong> is Part of Our Family</h2>
                        <button className='learn'>Learn More</button>
                        <button className='reservation'>Make a Reservation</button>
                    </section>
                    <img src={paw} alt="" />
                </section>
                <section className='image-content'>
                    <img src={animals} alt="animals" />
                </section>
            </div>

        </article>
    )
}