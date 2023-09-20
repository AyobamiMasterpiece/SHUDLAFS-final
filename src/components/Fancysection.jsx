import React from 'react'
import Button from './Button'
import SectionList from './SectionList'



export default function Fancysection({heading}){

    return(
        <div className='section'>
        <div className='first-section'>
        <div className='main-background-child'>
            <p>{heading}</p>
            </div>
            <div className='section-container'>
         <SectionList num={1}/>
           <SectionList num={2}/>
           <SectionList num={3}/>
           <Button title={'Learn more'}/>
            </div>
          
        </div>
        <div className="img-container" >
          
        </div>
        </div>
    )
}