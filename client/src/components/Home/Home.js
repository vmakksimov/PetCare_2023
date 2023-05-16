import './Home.css'
import animals from '../../styles/images/kindpng_2140500.png'
import paw from '../../styles/images/paw.png'


export const Home = ({ pets }) => {

    const pet = pets.find(x => x.name == 'Aya' && 'true')
    console.log(pet)

    return (
        <>
            <article className='daycare-header'>
                <div className="home-content">
                    <section className='title-content'>
                        <section className='title-buttons'>
                            <h1>Home Page</h1>
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
            <article className='daycare-content'>
                <section className='box-service-1'>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <h1>Daycare</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <button>More Details</button>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                </section>
                <section className='box-service-2'>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <h1>Grooming</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <button>More Details</button>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                </section>
                <section className='box-service-3'>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <h1>Shop</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <button>More Details</button>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                </section>
                <section className='box-service-4'>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <h1>Boarding</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <button>More Details</button>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                </section>
                <section className='box-service-5'>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                    <h1>Veterinary</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <button>More Details</button>
                    <i class="fa fa-paw" aria-hidden="true"></i>
                </section>
            </article>
        </>
    )
}