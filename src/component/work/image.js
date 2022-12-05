import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';


const UploadImage = () => {
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        setTimeout(() => {
            localStorage.setItem("imgArray", JSON.stringify(fileList))
        }, 2000);
    };
    const onPreview = async (file) => {
        let src = file.url;
        // console.log(file.url)
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
        // console.log("image", image)
        // console.log("source", src)
    };
    console.log("fiellist===========>",fileList)
    return (
        <center style={{ marginTop: "30px" }}>
            <ImgCrop rotate>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
            </ImgCrop>
        </center>
    );
};

export default UploadImage;