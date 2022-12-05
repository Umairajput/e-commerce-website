import React from "react";
import { useState } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './beg.css'

function Count() {
    const [count, setCount] = useState(1)
    function addBtn() {
        setCount(count + 1)
    }
    function subBtn() {
        setCount(count - 1)
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <h2>0{count}</h2>
            <div style={{ marginTop: '-10px' }}>
                {count === 9 ?
                    <span className="icon_span" style={{ opacity: '0.3' }}><AddCircleIcon /></span>
                    :
                    <span className="icon_span" onClick={addBtn}><AddCircleIcon /></span>
                }
                {
                    count === 1 ?
                        <span className="icon_span" style={{ marginLeft: '20px', opacity: '0.3' }}><RemoveCircleIcon /></span>
                        :
                        <span className="icon_span" style={{ marginLeft: '20px' }} onClick={subBtn}><RemoveCircleIcon /></span>
                }
            </div>
        </div>
    )
}
export default Count