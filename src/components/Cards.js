import React from 'react'
import CardItem from './CardItem'
import '../components/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1> Check Out These Destinations </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                        src="images/img-9.jpg"
                        text='' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards