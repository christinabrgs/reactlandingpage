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
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='services' />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            src="images/img-2.jpg"
                            text='Stretch out on the beaches of the caribbean islands'
                            label='Luxery'
                            path='/services' />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            src="images/img-8.jpg"
                            text='Take a walking tour and experience the beauty of the dessert'
                            label='Adventure'
                            path='/services' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards