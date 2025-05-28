import React from 'react'


function CardItem(props) {
    return (
      <li className="cards__item" style={props.style}>
        <div className="cards__item__link">
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
              {props.text}
            </h5>
          </div>
          <img src={props.src} alt='logo' className='cards__item__img' />
          <div className='cards__item__description'>
            <p className='cards__item__desc'>
              {props.info}
            </p>
          </div>
        </div>
      </li>
    );
  }

export default CardItem