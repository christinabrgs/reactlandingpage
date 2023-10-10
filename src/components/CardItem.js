import React from 'react'
import { Link } from 'react-router-dom'

function CardItem() {
    return (
        <>
            <li className="cards_item">
                <Link className="cards_item_link">
                    <figure className='cards_item_pic-wrap'>
                        <img src='/' alt='Travel Image' className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                    </div>
                    <div className='cards__item__text'>
                    </div>
                </ Link>
            </li>
        </>
    )
}

export default CardItem