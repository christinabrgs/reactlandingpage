import React from 'react'
import CardItem from './CardItem'
import '../components/services.css'
import Pen from '../images/pen.svg'
import Logo from '../images/log.svg'
import Code from '../images/code.svg'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className="cards_headline"> <h1> SERVICES </h1> </div>
                <div className='cards__wrapper'>
                    <div className='cards__items'>
                        <CardItem
                            src={Pen}
                            text='UI DESIGN'
                            label='Adventure'
                            // path='' 
                            info='clean designs, tailored to the user, backed by research to understand your key audience'
                            />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            style={{backgroundColor: '#fee7d5'}}
                            src={Code}
                            text='DEVELOPMENT'
                            label='Luxery'
                            // path=''
                            info='full-stack developer who has experience creating both web and mobile applications'
                             />
                    </div>
                    <div className='cards__items'>
                        <CardItem
                            src={Logo}
                            text='BRANDING'
                            label='Adventure'
                            // path='' 
                            info='your brand is the first thing people see, dedicated to making sure it leaves a lasting first impression'
                            />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards