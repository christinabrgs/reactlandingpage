import React from 'react'
import CardItem from './CardItem'
import '../components/services.css'
import Pen from '../images/design.svg'
import Logo from '../images/branding.svg'
import Code from '../images/development.svg'


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className="cards_headline">
          <h1>SERVICES</h1>
        </div>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src={Pen}
              text='UI DESIGN'
              info='Clean designs, tailored to the user, backed by research to understand your key audience'
            />
          </div>
          <div className='cards__items'>
            <CardItem
              style={{ backgroundColor: '#99A8C1' }}
              src={Code}
              text='DEVELOPMENT'
              info='Full-stack developer with experience building both web and mobile applications'
            />
          </div>
          <div className='cards__items'>
            <CardItem
              src={Logo}
              text='BRANDING'
              info='Your visual brand is the first thing people see. I ensure it leaves a lasting impression'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards