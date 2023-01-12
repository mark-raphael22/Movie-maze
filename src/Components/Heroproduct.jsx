import React from 'react'
import { Container } from 'react-bootstrap'

export default function HeroProduct() {
  return (
    <div className='parent-div'style={{padding:'5rem'}}>
      <Container className='mx-auto text-center mt-5'>
            <div className='mt-7 p-5 gap-5 text-center mx-auto align-items-center '>
                    <h3 className='fw-bold'style={{color:'#a1a1a1'}}>MUST SEE TV SHOWS, NOW STREAMING</h3>
                    <p className='mb-4 fs-5 w-50 mx-auto text-white fw-light'>view thousands of shows and see details about your favorite tv shows and people.</p>
                    <a href="https://www.tvmaze.com" className='fw-bold text-dark p-3 bg-white mt-4 rounded-5' rel='noreferrer' target='_blank'>FIND OUT MORE</a>
            </div>
        </Container>
    </div>
  )
}