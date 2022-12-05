import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
function Loader() {

    const [load, setLoad] = useState(false)
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );

    return (

        <>
            {
                !load ?
                    <div style={{ width: '100%', height: '100%', marginTop: '10px' }} onClick={() => {
                        setLoad(true)
                        setTimeout(() => {
                            setLoad(false)
                        }, 1500)
                    }}> Add Cart
                    </div> :
                    <>
                        <div>
                            {/* Add Cart */}
                            <Spin indicator={antIcon} />
                        </div>
                    </>
            }
        </>

    )
}
export default Loader;