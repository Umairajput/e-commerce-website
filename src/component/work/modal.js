import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import './style.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Count from './count';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import "./beg.css"
import { useSelector } from 'react-redux'



const style = {
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 220,
    bgcolor: 'background.paper',
    border: '2px solid #888',
    boxShadow: 24,
    p: 4,
};
let total = 0;
export default function BasicModal(props) {
    const myReduxdata = useSelector((state) => state)
    const dataUid = myReduxdata.CartData.carddata
    let modal_uid;
    dataUid.forEach(element => {
        modal_uid = element.uid
    });
    console.log("MODAL_UID", modal_uid)
    const loginUid = myReduxdata.CartData.loginInformation.id
    console.log("loginUid", loginUid)
    // console.log("DataUid",dataUid)
    // const myitems = JSON.parse(localStorage.getItem('CartItems'))
    // var amount = myitems[props.index].price
    const location = useLocation()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const [count, setCount] = useState(1)
    const myitems = JSON.parse(localStorage.getItem('CartItems'))
    // console.log('myitems', myitems)
    // function addBtn() {
    //     setCount(count + 1)
    // }
    // function subBtn() {
    //     setCount(count - 1)
    // }
    const Back = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button className='shop_icon' onClick={handleOpen}>
                    <ProductionQuantityLimitsIcon className='shop_icon' style={{ marginTop: '-45px', color: 'black', }} />
                {/* <Badge badgeContent={myitems.length} max='9' color="primary">
                </Badge> */}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ overflow: 'scroll', height: '300px' }}>
                    <div>
                        {
                            dataUid?.map((v, i) => {
                                return (
                                        loginUid == v.uid?
                                        <div>
                                            <div className='modal_main_div' style={{ textAlign: 'center', marginTop: '10px' }}>
                                                <Typography id="modal-modal-title" variant="h4" component="h2">
                                                    My Bag
                                                </Typography>
                                            </div>
                                            <div className='modal_first_div'>
                                                <center>
                                                    <img className='modal_img' src={[v.img]} />
                                                    <p>
                                                        {
                                                            [v.name]
                                                        }
                                                    </p>
                                                    <p>Price:{[v.price]}</p>
                                                </center>
                                            </div>
                                            <div className='modal_second_div'>
                                                <h2>Size</h2>
                                                <span className='size_spans'>XL</span>
                                                <span className='size_spans'>S</span>
                                                <span className='size_spans'>M</span>
                                            </div>
                                            <div className='modal_third_div'>
                                                <center><h1>Color</h1></center>
                                                <div style={{ marginLeft: '10px' }}>
                                                    <button className='colorSpan'></button>
                                                    <button className='colorSpan red'></button>
                                                    <button className='colorSpan black'></button>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                            )
                        })
                        }
                        {
                            dataUid?.length == 0 ?
                                <div><p style={{ marginTop: '90px', marginLeft: '10px' }}>Sorry your cart is empty!!</p></div> :
                                <div>
                                    <center>
                                        <button className='btn' style={{ marginTop: '20px', width: '150px', color: 'black' }}><Link style={{ color: 'black' }} to='/beg'>View Beg</Link></button>
                                        <button className='btn' style={{ width: '150px' }} onClick={Back}>Check Out</button>
                                    </center>
                                </div>
                        }
                        {/* <img style={{ width: '150px', height: '150px' }} src={location.state.image} /> */}
                    </div>
                    {/* 
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <p>Apollo Running Woman Short</p>
                            <p>$50.00</p>
                            <img style={{ width: '150px', height: '150px' }} src={"https://www.junaidjamshed.com/media/wysiwyg/Shirt_N_Trouser.jpg"} />
                        </div>
                        <div style={{marginLeft:'30px'}}>
                            <h1>Color</h1>
                            <button className='colorSpan'></button>
                            <button className='colorSpan' style={{backgroundColor:'red'}}></button>
                            <button className='colorSpan'style={{backgroundColor:'black'}}></button>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <p>Apollo Running Man Short</p>
                            <p>$50.00</p>
                            <img style={{ width: '150px', height: '150px' }} src={"https://www.junaidjamshed.com/media/wysiwyg/prince_coat.jpg"} />
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                                <h2>Size</h2>
                                <span style={{border:'1px solid black',padding:'10px'}}>XL</span>
                                <span style={{border:'1px solid black',padding:'10px'}}>S</span>
                                <span style={{border:'1px solid black',padding:'10px'}}>M</span>
                            </div>
                            <div style={{ textAlign: 'center',marginTop:'15px' }}>
                                <h2>{count}</h2>
                                <div style={{marginTop:'-10px'}}>
                                    <span onClick={addBtn}><AddCircleIcon /></span>
                                    <span style={{ marginLeft: '20px' }} onClick={subBtn}><RemoveCircleIcon /></span>
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft:'30px'}}>
                            <h1>Color</h1>
                            <button className='colorSpan'></button>
                            <button className='colorSpan' style={{backgroundColor:'red'}}></button>
                            <button className='colorSpan'style={{backgroundColor:'black'}}></button>
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <p>Apollo Running kids Short</p>
                            <p>$50.00</p>
                            <img style={{ width: '150px', height: '150px' }} src={"https://www.junaidjamshed.com/media/wysiwyg/KB_1.jpg"} />
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div>
                                <h2>Size</h2>
                                <span style={{border:'1px solid black',padding:'10px'}}>XL</span>
                                <span style={{border:'1px solid black',padding:'10px'}}>S</span>
                                <span style={{border:'1px solid black',padding:'10px'}}>M</span>
                            </div>
                            <div style={{ textAlign: 'center',marginTop:'15px' }}>
                                <h2>{count}</h2>
                                <div style={{marginTop:'-10px'}}>
                                    <span onClick={addBtn}><AddCircleIcon /></span>
                                    <span style={{ marginLeft: '20px' }} onClick={subBtn}><RemoveCircleIcon /></span>
                                </div>
                            </div>
                        </div>
                        <div style={{marginLeft:'30px'}}>
                            <h1>Color</h1>
                            <button className='colorSpan'></button>
                            <button className='colorSpan' style={{backgroundColor:'red'}}></button>
                            <button className='colorSpan'style={{backgroundColor:'black'}}></button>
                        </div>
                    </Typography> */}
                </Box>
            </Modal>
        </div>
    );
}

{/* <Count /> */ }
{/* <Counter/> */ }
{/* <div style={{ textAlign: 'center', marginTop: '15px' }}>
    <h2>0{count}</h2>
    <div style={{ marginTop: '-10px' }}>
        {count === 9 ?
            <span style={{ opacity: '0.3' }}><AddCircleIcon /></span>
            :
            <span onClick={addBtn}><AddCircleIcon /></span>
        }
        {
            count === 1 ?
                <span style={{ marginLeft: '20px', opacity: '0.3' }}><RemoveCircleIcon /></span>
                :
                <span style={{ marginLeft: '20px' }} onClick={subBtn}><RemoveCircleIcon /></span>
        }
    </div>
</div> */}