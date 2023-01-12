import React from 'react'
import { Container } from 'react-bootstrap'
import {FaFacebookF, FaInstagramSquare, FaPinterestSquare} from 'react-icons/fa'
import { BsTwitter} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'






export default function Footer() {
  return (
    <Container className='mx-auto mt-5 py-5 logos bg-white'>
            <div className=''>
                <div className='d-md-flex mx-5 mt-4 py-3 gap-3 icons' style={{ }}>
                  <h3 className=''style={{}}><a href='https://facebook.com'><FaFacebookF/></a></h3>
                  <h3><a href='https://twitter.com'><BsTwitter/></a></h3>
                  <h3><a href='https://instagram.com'><FaInstagramSquare/></a></h3>
                  <h3><a href='https://pinterest.com'><FaPinterestSquare/></a></h3>
                </div>
                <div className=' mx-5 d-flex justify-content-between mt-3 align-self-center'>
                    <h5><AiOutlineCopyright/>Tvmaze.com</h5>
                    <div className=' d-md-flex gap-3 text-uppercase '>
                        
                        <p>cookies settings</p>
                        <p>privacy policy</p> 
                        <p>return</p>
                        <p>features</p>
                    </div>
            </div>
            </div>


        
    </Container>
  )
}