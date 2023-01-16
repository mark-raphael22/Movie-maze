import React from 'react'
import { Container } from 'react-bootstrap'
import {FaFacebookF, FaInstagramSquare, FaPinterestSquare} from 'react-icons/fa'
import { BsTwitter} from 'react-icons/bs'
import {AiOutlineCopyright} from 'react-icons/ai'





export default function Footer() {
  return (
    <Container className='mx-auto mt-5 py-5 px-2 logos 'style={{backgroundColor:' #f1f5f9'}}>
            <div className=''>
                <div className=' d-flex mx-1 mt-3 gap-2 icons mb-6' style={{ }}>
                   
                   
                  <h3 style={{color:''}}><a href='https://facebook.com'><FaFacebookF/></a></h3>
                  <h3><a href='https://twitter.com'><BsTwitter/></a></h3>
                  <h3><a href='https://instagram.com'><FaInstagramSquare/></a></h3>
                  <h3><a href='https://pinterest.com'><FaPinterestSquare/></a></h3> 
                           </div>
                <div className=' mx-2 d-md-flex justify-content-between   '>
                    <h5 className='d-md mb-4'><AiOutlineCopyright/>Tvmaze.com</h5>
                    <div className=' d-md-flex justify-content-start  align-items-start gap-3  text-uppercase  '>
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