import paws from '../../../styles/images/paws.png'
import grooming from '../../../styles/images/grooming.png'


export const Grooming = () => {
    return (
        <section className="grooming-section">
            <div className="home-content">
                    <section className='title-content'>
                        <section className='title-buttons'>
                            <h1>Grooming</h1>
                        </section>
                        <img src={paws} alt="" />
                    </section>
                    <section className='image-content'>
                        <img src={grooming} alt="animals" />
                    </section>
            </div>
            <div className='grooming-content'>
                
            </div>
        </section>
    )
}