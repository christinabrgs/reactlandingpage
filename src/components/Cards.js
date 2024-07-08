import React from 'react'
import CardItem from './CardItem'
import '../components/Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                            text='PORTFOLIO'
                            label='Adventure'
                            path='portfolio' />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            src="images/img-2.jpg"
                            text='RESUME'
                            label='Luxery'
                            path='resume' />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            src="images/img-8.jpg"
                            text='CONTACT'
                            label='Adventure'
                            path='contact' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards