import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Drawer, Space } from "antd";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
    const Obj = [
        {
            name: localStorage.getItem("name")
        },
        {
            email: localStorage.getItem("email")
        },
        {
            password: localStorage.getItem("password")
        },
        {
            image: JSON.parse(localStorage.getItem("imgArray"))
        }
    ]
    const onOpen = () => {
        setOpen(true);
    };
    const onClose = () => {
        // console.log(Obj[3]?.image[0]?.thumbUrl, "=====+====+======line 27")
        setOpen(false);
    };

    return (
        <>
            <Space>
                <span type="primary" onClick={onOpen}>
                    <AccountCircleIcon className="addIcon" style={{ fontSize: '28px', color: 'black' }} />
                </span>
            </Space>
            <Drawer className="side_bar"
                title={`Hi ${Obj[0].name} 👏`}
                placement="right"
                size={size}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <center>
                    <div>
                        {/* <img className="profile_image" src={Obj[3]?.image[0]?.thumbUrl} /> */}
                        <p style={{ marginTop: '20px' }}>{Obj[0].name}</p>
                        {/* <p>Email:{Obj[1].email}</p> */}
                    </div>
                </center>
            </Drawer>
        </>
    );
};

export default SideBar;
