
import React from 'react'

function CardItem() {
    return (
        <>
            <li className="cards_item">
                <Link className="cards_item_link">
                    <figure className='cards_item_pic-wrap'>
                        <img src='/' alt='Travel Image' className='cards__item__img' /> 
                    </figure>
                </ Link>
            </li>
        </>
    )
}

export default CardItem