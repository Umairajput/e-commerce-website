import React from 'react'
import Navbar from './navbar'
import './style.css'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './spin';

function Kids() {
    const [modal, setModal] = useState([])
    const [addItemButton, setAddItemButton] = useState(false)
    const Navigate = useNavigate()
    const [newData, setNewData] = useState()
    const obj = [
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/KB_1.jpg",
            name: "Child White Shalwar Kameez",
            price: 5000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/KG.jpg",
            name: "Kids Dress",
            price: 6000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/catalog/product/3/8/38545_3_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755",
            name: "Shalwar Kameez",
            price: 7000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/catalog/product/j/j/jjgk-22-001_4_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755",
            name: "Kids Kurta Shalwar",
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
            <h1 className='woman_heading'>Kids Collections</h1>
            <div className='data_div'>
                {
                    obj.map((v, i) => {
                        return (
                            <div className='card'>
                                <img className='images' src={v.img} />
                                <center>
                                    <p style={{marginTop:'30px'}}>{v.name}</p>
                                    <p>{v.price}</p>
                                    {/* <button  className='main_buttons' onClick={()=>{myBagItem(i)}}>{v.button}</button><br/> */}
                                    <button className='main_buttons' onClick={() => {
                                        if (newData.includes(v?.img)) {
                                            alert("This Cart is already added")
                                        } else {
                                            AddItems(v)
                                        }
                                    }}>
                                        <Loader />
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

export default Kids
