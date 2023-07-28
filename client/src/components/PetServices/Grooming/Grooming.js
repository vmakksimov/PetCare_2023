import paws from '../../../styles/images/paws.png'
import grooming from '../../../styles/images/grooming.png'
import groomingService from '../../../styles/images/service-4.jpg'
import './Grooming.css'
import { Calendar } from '@natscale/react-calendar';
import { useState } from 'react';

export const Grooming = () => {
    const [value, setValue] = useState();

    const onClick = (e) => {
        setValue(value);
    }
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
                <article className='booking-image'>
                    <img src={groomingService} alt="" />
                </article>
                <article className='boooking-content'>
                    <div className='grooming-price'>
                        <h2>Grooming</h2>
                        <h1>50.00 - 100.00</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                        <section className='grooming-details'>
                            <label id='grooming-table-label' htmlFor="grooming-table">Duration</label>
                            <select id='grooming-table'>
                                <option value="Choose an option">Choose an option</option>
                                <option value="Full Day">Full day (over 5 hours)</option>
                                <option value="Half Day">Half day (under 5 hours)</option>
                            </select>
                        </section>
                        <section className='grooming-date'>
                            <label id='datepiker-label' htmlFor="datepiker">Date</label>
                            <input id='datepiker' type='date' placeholder='DD/MM/YYYY'></input>
                        </section>

                    </div>
                    <div className='grooming-quantity'>
                        <input className='button-quantity' placeholder='1'></input>
                        <button className='button-cart'>Add to Cart</button>
                    </div>
                    
                    <div className="button-buy">
                        
                        <input type="submit" value="Buy Now" />
                    </div>
                </article>
            </div>
        </section>
    )
}