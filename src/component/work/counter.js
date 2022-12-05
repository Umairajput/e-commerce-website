import React from "react";
import { useState } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux'
import './beg.css'

// let total=0;
function Counter(props) {
    const myitems = JSON.parse(localStorage.getItem('CartItems'))
    const myReduxdata = useSelector((state) => state)
    const dataUid = myReduxdata.CartData.carddata
    var amount = dataUid[props.index].price
    const [count, setCount] = useState(1)
    const [plus, setPlus] = useState(amount)
    // const [total, setTotal] = useState(plus)
    
    // let total=0
    // console.log('First Total',total)
    // const [total, setTotal] = useState(0)
    // let totalAmount=0
    function addBtn() {
        setCount(count + 1)
        // console.log("total",total)
        setPlus(amount + plus)
        // total=total+amount;
    }
    // console.log(setPlus(amount + plus))
    // setTotal(total)
    // console.log('Total',total)
    // console.log('Outside Total',total)
    // console.log(totalAmount)
    function subBtn() {
        setCount(count - 1)
        setPlus(plus - amount)
    }
    // console.log(amount)
    // const plusOne = plus
    // const plusTwo = plus
    // console.log(plusTwo)
    // console.log(plusOne)
    // console.log(plus)
    // console.log(plus + plusOne,"total")
    return (
        <div>
            <div className="counter_main_div">
                {
                    count === 9 ?
                        <span className="counter_button" style={{ opacity: '0.3' }}><AddCircleIcon /></span>
                        :
                        <span className="counter_button" onClick={addBtn}><AddCircleIcon /></span>
                }
                <br /><br />
                <h2 className="counter_heading">0{count}</h2>
                <br />
                {
                    count === 1 ?
                        <span className="counter_button" style={{ opacity: '0.3' }}><RemoveCircleIcon /></span>
                        :
                        <span className="counter_button" onClick={subBtn}><RemoveCircleIcon /></span>
                }
                {/* <button className='counter_button' onClick={subBtn}><RemoveCircleIcon /></button> */}
            </div>
            <div>
                <h1 className="count_heading">Quantity:0{count}</h1>
            </div>
            <div>
                <h1 className="count_heading" style={{marginTop:'10px'}}>Total:{plus}</h1>
            </div>
            {/* <h2 className="total_heading">Total:{plus}</h2> */}
            {/* <h1>{total}</h1> */}
        </div>
    )
}
export default Counter