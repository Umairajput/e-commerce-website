import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Image } from '@react-pdf/renderer';
// import img from 'https://www.junaidjamshed.com/media/wysiwyg/3_PC_Unstitched.jpg'
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        width: '100%'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    image: {
        height: 150,
        width: 150,
        alignSelf: 'flex-end',
        marginTop:'-100px'
    },
    size1: {
        borderColor: "black",
        backgroundColor: 'black',
        color: 'white',
        height: 20,
        width: 20,
        // marginLeft: 10,
        marginTop: 5,
        textAlign: 'center',
        backgroundColor: 'yellow'
    },
    size: {
        borderColor: "black",
        backgroundColor: 'black',
        color: 'white',
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 5,
        textAlign: 'center'
    },
    sizes: {
        marginTop: 5,
    },
    color1: {
        backgroundColor: "red",
        color: "red",
        height: 20,
        width: 20,
        // marginLeft: 10,
        marginTop: 5
    },
    color2: {
        backgroundColor: "black",
        color: "black",
        height: 20,
        width: 20,
        marginLeft: 10,
        marginTop: 5
    },
    color3: {
        backgroundColor: "green", color: "green",
        height: 20, width: 20, marginLeft: 10, marginTop: 5
    },
    direction: {
        display: 'flex', flexDirection: 'row'
    }
});
function PDF() {

    const [data, setData] = useState()
    useEffect(() => {
        const myitems = JSON.parse(localStorage.getItem('CartItems'))
        console.log(JSON.parse(localStorage.getItem('CartItems')), "========,,,,")
        setData(myitems)
    }, [])
    return (
        <Document style={{ width: '100%' }}>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={{ backgroundColor: "black", color: "white", textAlign: 'center' }}>Your your order details </Text>
                    <View> {data?.map((v, i) => {
                        console.log(v?.img, "====")
                        return (
                            <>
                                <View style={styles.section} >
                                    <View style={styles.direction}>
                                        <View style={{ width: '60%' }}>
                                            <Text style={styles.sizes}>{v?.p}</Text>
                                            <Text style={styles.sizes}>Rs.{v?.price}</Text>
                                            <Text style={styles.sizes}>Size</Text>
                                            <View style={styles.direction}>
                                                <Text style={styles.size1}>S</Text>
                                                <Text style={styles.size}>M</Text>
                                                <Text style={styles.size}>L</Text>
                                            </View>
                                            <Text>Colors</Text>
                                            <View style={styles.direction}>
                                                <Text style={styles.color1}>.</Text>
                                                <Text style={styles.color2}>.</Text>
                                                <Text style={styles.color3}>.</Text>
                                            </View>
                                        </View>
                                        {/* <View style={{ width: '40%', backgroundColor: 'red', }}>
                                        </View> */}

                                    </View>
                                    <View style={styles.image}>
                                        <Image style={styles.img} src="https://thumbs.dreamstime.com/b/colorful-collection-women-s-clothes-23554117.jpg" />
                                    </View>
                                </View>
                            </>
                        )
                    })}</View>
                </View>
            </Page>
        </Document>
    );
}

export default PDF












// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// // import Image from 'rc-image';
// import { Image } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'column',
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });
// const myitems = JSON.parse(localStorage.getItem('CartItems'))
// myitems.map((v, i) => {
//     console.log(v?.img, "<============image line no =>17")
// })
// const PDF = () => (
//     <Document>
//         <Page size="A4" style={styles.page}>
//             <View style={{ display: 'flex', flexDirection: 'row' }}>

//                 {
//                     myitems?.map((v, i) => {
//                         return (
//                             <View style={{ display: 'flex', flexDirection: 'row' }}>
//                                 <Text style={{ marginLeft: 15, marginTop: 5, fontSize: '50px' }}>Clothes Collections</Text>
//                                 <Text style={{ marginTop: 80, marginLeft: -325, fontSize: '50px' }} >RS:8000</Text>
//                                 <Text style={{ marginTop: 140, marginLeft: -200, fontSize: '50px' }} >Size</Text>
//                                 <Text style={{ height: '80px', width: '80px', marginTop: 210, marginLeft: -100, backgroundColor: 'red' }}></Text>
//                                 <Text style={{ height: '80px', width: '80px', marginTop: 210, backgroundColor: 'green' }}></Text>
//                                 <Text style={{ height: '80px', width: '80px', marginTop: 210, backgroundColor: 'black' }}></Text>
//                             </View>
//                         )
//                     })
//                 }
//                 {/* {
//                     myitems.map((v, i) => { */}
//                 {/* <h2 className='head'>{v.name}</h2>
//                             <h2 className='head'>{v.price}</h2> */}
//                 {/* <Text>Size</Text> */}
//                 {/* })
//                 } */}
//                 {/* <Text> {additm.map((v, i) => {
//                     return (
//                         <>te
//                             <View>
//                                 <Text><p>{v?.p} <br /></p> </Text>
//                             </View>
//                             <View>
//                                 <Text>Rs.{v?.price}<br /></Text>
//                             </View>
//                         </>
//                     )
//                 })}</Text> */}
//             </View>
//         </Page>
//     </Document>
// );

// export default PDF