// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import { useState } from 'react';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import './style.css'
// import { useLocation } from 'react-router-dom'
// import {Link} from 'react-router-dom'



// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '80%',
//     transform: 'translate(-50%, -50%)',
//     width: 220,
//     bgcolor: 'background.paper',
//     border: '2px solid #888',
//     boxShadow: 24,
//     p: 4,
// };
// export default function SecondModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const location = useLocation()
//     const [count, setCount] = useState(0)
//     function addBtn() {
//         setCount(count + 1)
//     }
//     function subBtn() {
//         setCount(count - 1)
//     }
//     const Back =()=>{
//         setOpen(false)
//     }
//     return (
//         <div>
//             <Button onClick={handleOpen}>
//                 <ProductionQuantityLimitsIcon style={{ marginTop: '-38px', color: 'black' }} />
//             </Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style} style={{ overflow: 'scroll', height: '300px' }}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         My Bag
//                     </Typography>
//                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                         <div>
//                             <p>Apollo Running Woman Short</p>
//                             <p>$50.00</p>
                            
//                             <img style={{ width: '150px', height: '150px' }} src={location.state.image} />
//                         </div>
//                         <div style={{display:'flex',justif // <div>
                        //     <button><Link to='/beg'>View Beg</Link></button>
                        //     <button onClick={Back}>Check Out</button>
                        // </div>yContent:'space-between'}}>
//                             <div>
//                                 <h2>Size</h2>
//                                 <span style={{border:'1px solid black',padding:'10px'}}>XL</span>
//                                 <span style={{border:'1px solid black',padding:'10px'}}>S</span>
//                                 <span style={{border:'1px solid black',padding:'10px'}}>M</span>
//                             </div>
//                             <div style={{ textAlign: 'center',marginTop:'15px' }}>
//                                 <h2>{count}</h2>
//                                 <div style={{marginTop:'-10px'}}>
//                                     <span onClick={addBtn}><AddCircleIcon /></span>
//                                     <span style={{ marginLeft: '20px' }} onClick={subBtn}><RemoveCircleIcon /></span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div style={{marginLeft:'30px'}}>
//                             <h1>Color</h1>
//                             <button className='colorSpan'></button>
//                             <button className='colorSpan' style={{backgroundColor:'red'}}></button>
//                             <button className='colorSpan'style={{backgroundColor:'black'}}></button>
//                         </div>
//                         <br/>
//                         <hr/>
                        // <div>
                        //     <button><Link to='/beg'>View Beg</Link></button>
                        //     <button onClick={Back}>Check Out</button>
                        // </div>
//                     </Typography>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }
