import React from 'react'
export default function SectionList({num}) {
    return(
    <div className='section-item'>
    <p className='sectionlistnum'>{num}</p>
    <div>
    <p className='sectionlistp' style={{
        fontWeight:'bold',
        fontSize:'1.2rem'

    }}>Earn extra income, fast!</p>
  
  <p>There’s no subscription fee. You’ll receive your earnings at the end of each week.</p>
    </div>
          </div>
    )
}