import React, { useState } from 'react'
import Navbar from './navbar.js'
// import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import PDF from './pdf.js';
import './style.css'
import './beg.css'
import Counter from './counter.js';
import { useSelector } from 'react-redux'
function Beg() {
    const myReduxdata = useSelector((state) => state)
    const loginUid = myReduxdata.CartData.loginInformation.id
    const dataUid = myReduxdata.CartData.carddata
    const [show, setShow] = useState('hide')
    const myitems = JSON.parse(localStorage.getItem('CartItems'))
    const Show = () => {
        setShow('show')
    }
    const Hide = () => {
        setShow('hide')
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='main'>
                <h1 className='heading'>Cart</h1>
                <br />
                {
                    dataUid?.map((v, i) => {
                        return (
                            loginUid == v.uid ?
                            <div className='main_bag_div'>
                                <div className='second_div'>
                                    <h2 className='head'>{v.name}</h2>
                                    <h2 className='head'>{v.price}</h2>
                                    <h3 className='head'>Size</h3>
                                    <div className='beg_div'>
                                        <span className='beg_span'>XL</span>
                                        <span className='siza_span' style={{ color: 'white', backgroundColor: 'black' }}>XS</span>
                                        <span className='siza_span'>M</span>
                                    </div>
                                    <div className='main_first_div'>
                                        <h2 className='head'>Color</h2>
                                        <button className='bag_color_span'></button>
                                        <button className='bag_color_span red'></button>
                                        <button className='bag_color_span black'></button>
                                    </div>
                                    <h3 className='beg_counter_div'><Counter index={i} /></h3>
                                </div>
                                <div className='beg_image_div'>
                                    <img className='beg_images' src={v.img} />
                                </div>
                            </div>
                            :
                            null
                        )
                    })
                }
                <div className='pdf_div'>
                    {/* {
                        show !== 'show' ?
                            <div>
                                <button className='main_buttons' onClick={Show}>Show PDF</button>
                                <button className='main_buttons' style={{ display: 'none' }}>Hide</button>
                            </div>
                            :
                            <div>
                                <button className='main_buttons' style={{ display: 'none' }}>Show</button>
                                <button className='main_buttons' onClick={Hide}>Hide</button>
                            </div>
                    }
                    {show !== 'show' ?
                        <PDFViewer style={{ display: 'none' }}>
                            <PDF />
                        </PDFViewer> :
                        <PDFViewer style={{ height: '300px', width: '300px', marginTop: '30px',display:'block' }}>
                            <PDF />
                        </PDFViewer>
                    } */}
                    {/* <PDFDownloadLink document={<PDF />} fileName="PDF">
                        {({ loading }) => (loading ? <center><button className="main_buttons">Downloding</button></center> :
                            <button className="main_buttons" style={{ color: 'black', marginTop: '50px' }}>Downlod </button>)}
                    </PDFDownloadLink> */}
                </div>
            </div>
        </div>
    )
}

export default Beg

// const [modal, setModal] = useState([])
// const [addItemButton, setAddItemButton] = useState(false)
// const Navigate = useNavigate()
// const AddItems = (items) => {
//     setAddItemButton(true)
//     console.log('items', items)
//     setModal([...modal, { img: items.img, name: items.name,price:items.price}])
//     // localStorage.setItem('CartItems', JSON.stringify(modal))
// }
// useEffect(() => {
//     setAddItemButton(false)
//     localStorage.setItem('CartItems', JSON.stringify(modal))
// }, [addItemButton === true])