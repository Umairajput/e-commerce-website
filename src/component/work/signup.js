
import React from "react";
import "./form.css"
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import image from "../images/bg-image.png"
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import UploadImage from "./image";
const SignUp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAkaUiMCWN3a-fth_IaEEv-iBPZhoUtZ_o",
        authDomain: "e-commerce-website-d0cda.firebaseapp.com",
        projectId: "e-commerce-website-d0cda",
        storageBucket: "e-commerce-website-d0cda.appspot.com",
        messagingSenderId: "894253917327",
        appId: "1:894253917327:web:8af2bcf555bba39b2dbcfa",
        measurementId: "G-37E1X76HK4"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();
    let navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);
    const nameRegex = /^.{3,}$/
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const passwordRegex = /^.{6,}$/
    const UserAlert = () => {
        swal("Please fill values")
    }
    const Sign = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/login")
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    email: email,
                    password: password
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        // if (name === "" || email === "" || password === "") {
        //     swal("Please Fill the Valid")
        // }
        // else if (!nameRegex.test(name)) {
        //     swal("Name must be at least three Characters")
        // }
        // else if (!emailRegex.test(email)) {
        //     swal('Email is InValid')
        // }
        // else if (!passwordRegex.test(password)) {
        //     swal("Password must be at least six letter")
        // }
        // else {
        //     localStorage.setItem("name", name)
        //     localStorage.setItem("email", email)
        //     localStorage.setItem("password", password)
        //     setName("")
        //     setEmail("")
        //     setPassword("")
        //     navigate("/login")
        // }
    }
    // console.log(selectedFile)
    const ClickMe = () => {
        navigate("/login")
    }
    return (
        <div className="main_div">
            <div className="form_div">
                <h1 className="form_heading">SignUp form</h1>
                <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* <UploadImage /> */}
                <center>
                    {nameRegex.test(name) === false || emailRegex.test(email) === false || passwordRegex.test(password) === false ?
                    <button className="form_button" onClick={UserAlert}>Sign Up</button>
                    :
                    <button className="form_button" onClick={Sign}>Sign Up</button>
                    }
                    <p className="line" onClick={ClickMe}>Do you have an account? Login Now!</p>
                </center>
            </div>
            <div className="image_div">
                <img className="image" src={image} />
            </div>
        </div>
    )
}
export default SignUp


















//old work

// import React from "react";
// import image from "../images/bg-image.png"
// import "./form.css"
// import { useState } from "react";
// import swal from 'sweetalert';
// import { useNavigate } from "react-router-dom";
// import UploadImage from "./image";
// const SignUp = () => {
//     let navigate = useNavigate()
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [selectedFile, setSelectedFile] = useState(null);
//     const nameRegex = /^.{3,}$/
//     const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
//     const passwordRegex = /^.{6,}$/
//     const Sign = () => {
//         if (name === "" || email === "" || password === "") {
//             swal("Please Fill the Valid")
//         }
//         else if (!nameRegex.test(name)) {
//             swal("Name must be at least three Characters")
//         }
//         else if (!emailRegex.test(email)) {
//             swal('Email is InValid')
//         }
//         else if (!passwordRegex.test(password)) {
//             swal("Password must be at least six letter")
//         }
//         else {
//             localStorage.setItem("name", name)
//             localStorage.setItem("email", email)
//             localStorage.setItem("password", password)
//             setName("")
//             setEmail("")
//             setPassword("")
//             navigate("/login")
//         }
//     }
//     console.log(selectedFile)
//     const ClickMe = () => {
//         navigate("/login")
//     }
//     return (
//         <div className="main_div">
//             <div className="form_div">
//                 <h1 className="form_heading">SignUp form</h1>
//                 <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input className="input" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <UploadImage />
//                 <center><button className="form_button" onClick={Sign}>Sign Up</button>
//                     <p className="line" onClick={ClickMe}>Do you have an account? Login Now!</p>
//                 </center>
//             </div>
//             <div className="image_div">
//                 <img className="image" src={image} />
//             </div>
//         </div>
//     )
// }
// export default SignUp