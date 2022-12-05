import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import './style.css'
import { useNavigate } from "react-router-dom";
import Loader from './spin';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { CardData } from '../../Redux/actions';

function Womans() {
    const [modal, setModal] = useState([])
    const [addItemButton, setAddItemButton] = useState(false)
    const Navigate = useNavigate()
    const [newData, setNewData] = useState()
    const [reduxData, setReduxData] = useState()
    const dispatch = useDispatch()
    const myReduxdata = useSelector((state) => state)
    const uid = myReduxdata.CartData.loginInformation.id
    console.log("REDUX DATA", myReduxdata)
    const oldData = myReduxdata.CartData.carddata
    console.log("oldData===>",oldData)
    const obj = [
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/Shirt_N_Trouser.jpg",
            name: "Red Dress",
            price: 5000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/3_PC_Unstitched.jpg",
            name: "Green Dress",
            price: 6000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/Kurti_5.jpg",
            name: "Black Kurti",
            price: 7000,
            button: 'Description',
            but: 'Add to Card'
        },
        {
            img: "https://www.junaidjamshed.com/media/wysiwyg/02_unstitched.jpg",
            name: "Red Unstitched",
            price: 8000,
            button: 'Description',
            but: 'Add to Card'
        }
    ]
    const AddItems = (items) => {
        setAddItemButton(true)
        let cardsData = {
            img:items.img,
            name:items.name,
            price:items.price,
            uid:uid
        }
        console.log("cardsData",cardsData)
        dispatch(CardData(cardsData))
        console.log("CARDS__DATA====>",cardsData)
        setModal([...modal, { img: items.img, name: items.name, price: items.price,uid:uid }])
        console.log('modal==>', modal)
        // localStorage.setItem('CartItems', JSON.stringify(modal))
    }
    const myBagItem = (i) => {
        Navigate('/',
            {
                state: {
                    image: obj[i].img,
                    name: obj[i].name,
                    price: obj[i].price,
                    button: obj[i].button
                }
            })
    }
    useEffect(() => {
        setAddItemButton(false)
        localStorage.setItem('CartItems', JSON.stringify(modal))
        const newData = []
        const oldData = JSON.parse(localStorage.getItem('CartItems'))
        // console.log("oldData",oldData)
        oldData.map((value, index) => {
            newData.push(value?.img)
        })
        setNewData(newData)
        console.log("NEW_DATA",newData)
    }, [addItemButton === true])
    return (
        <div>
            <div><Navbar /></div>
            <br />
            <br />
            <br />
            <h1 className='women'>Woman Collections</h1>
            <div className='data_div'>
                {
                    obj.map((v, i) => {
                        return (
                            <div className='card'>
                                <img className='images' src={v.img} />
                                <center>
                                    <p style={{ marginTop: '30px' }}>{v.name}</p>
                                    <p>{v.price}</p>
                                    {/* <button className='main_buttons' onClick={() => { myBagItem(i) }}>{v.button}</button><br /> */}
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

export default Womans
