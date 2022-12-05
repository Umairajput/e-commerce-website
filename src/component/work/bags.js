import React from 'react'
import { useLocation } from 'react-router-dom'
import SecondNavbar from './navbar2'
import './style.css'
function Bags() {
    const location = useLocation()
    return (
        <div>
            <div><SecondNavbar/></div>
            <div className='bag_component_main_div'>
                <div className='images_main_div'>
                    <div className='small_images_div'>
                        <div><img className='small_images' src={location.state.image} /></div>
                        <div><img className='small_images' src={location.state.image} /></div>
                        <div><img className='small_images' src={location.state.image} /></div>
                    </div>
                    <div>
                        <img className='images' src={location.state.image} />
                    </div>
                </div>
                <div className='price_div'>
                    <div>
                        <div>
                        <h1 style={{margin:'0px'}}>{location.state.name}</h1>
                        </div>
                        <h2>Size</h2>
                        <button className='button_1'>XL</button>
                        <button className='button'>L</button>
                        <button className='button'>M</button>
                        <button className='button'>S</button>
                        <h2>Color</h2>
                        <button className='colors_1'></button>
                        <button className='colors'style={{backgroundColor:'green'}}></button>
                        <button className='colors'></button>
                        <h2>Price</h2>
                        <h2>{location.state.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bags
