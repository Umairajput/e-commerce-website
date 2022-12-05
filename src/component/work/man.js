import React from 'react'
import Navbar from './navbar'
import './style.css'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './spin';

function Men() {
    const [modal, setModal] = useState([])
    const [addItemButton, setAddItemButton] = useState(false)
    const Navigate = useNavigate()
    const [newData, setNewData] = useState()
    const obj = [
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/prince_coat.jpg",
            name: "Shalwar Kameez and Court",
            price: 5000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/grooms_1.jpg",
            name: "Wedding Clothes",
            price: 6000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/Waistcoat_3.jpg",
            name: "half cort and shalwar kameez",
            price: 7000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/KAMEEZ_SHALWAR_4.jpg",
            name: "Shalwar Kameez",
            price: 8000,
            button: 'Description',
            but: 'Add to Card'
        }
    ]
    const AddItems = (items) => {
        setAddItemButton(true)
        console.log('items', items)
        setModal([...modal, { img: items.img, name: items.name, price: items.price }])
        // localStorage.setItem('CartItems', JSON.stringify(modal))
    }
    useEffect(() => {
        setAddItemButton(false)
        localStorage.setItem('CartItems', JSON.stringify(modal))
        const newData = []
        const oldData = JSON.parse(localStorage.getItem('CartItems'))
        oldData.map((value, index) => {
            newData.push(value?.img)
        })
        setNewData(newData)
    }, [addItemButton === true])
    const myBagItem = (i) => {
        Navigate('/bag',
            {
                state: {
                    image: obj[i].img,
                    name: obj[i].name,
                    price: obj[i].price,
                    button: obj[i].button
                }
            })
    }
    return (
        <div>
            <div><Navbar /></div>
            <h1 className='woman_heading'>Man Collections</h1>
            <div className='data_div'>
                {
                    obj.map((v, i) => {
                        return (
                            <div className='card'>
                                <img className='images' src={v.img} />
                                <center>
                                    <p style={{marginTop:'30px'}}>{v.name}</p>
                                    <p>{v.price}</p>
                                    {/* <button className='main_buttons' onClick={() => { myBagItem(i) }}>{v.button}</button><br /> */}
                                    <button className='main_buttons'  onClick={() => {
                                        if (newData.includes(v?.img)) {
                                            alert("This Cart is already added")
                                        } else {
                                            AddItems(v)
                                        }
                                    }}>
                                        <Loader/>
                                    </button>
                                </center>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Men
