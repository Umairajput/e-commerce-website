import React from "react";
import image from "../images/bg-image.png"
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./form.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from 'sweetalert';
import {LoginUserData} from '../../Redux/actions/index'
import { useDispatch } from "react-redux";

const Login = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAkaUiMCWN3a-fth_IaEEv-iBPZhoUtZ_o",
        authDomain: "e-commerce-website-d0cda.firebaseapp.com",
        projectId: "e-commerce-website-d0cda",
        storageBucket: "e-commerce-website-d0cda.appspot.com",
        messagingSenderId: "894253917327",
        appId: "1:894253917327:web:8af2bcf555bba39b2dbcfa",
        measurementId: "G-37E1X76HK4"
    };
    const dispatch = useDispatch()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getFirestore();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Log = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log('If running')
                    let getName = docSnap.data().name
                    let getEmail = docSnap.data().email
                    let getPassword = docSnap.data().password
                    console.log("name", getName)
                    console.log("email", getEmail)
                    console.log("password", getPassword)
                    swal("Welcome" + " " + getName)
                    navigate('/woman')
                    let mylogininfo = {
                        id: user.uid,
                        name: docSnap.data().name,
                        email: docSnap.data().email,
                        password:docSnap.data().password
                    }
                    console.log('If running mylogininfo',mylogininfo)
                    
                    dispatch(LoginUserData(mylogininfo))
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                swal(errorMessage)
            });
        }
    const Warn = () => {
        swal("Please fill")
    }
    return (
        <div className="main_div">
            <div className="image_div">
                <img className="image" src={image} />
            </div>
            <div className="form_div">
                <h1 className="form_heading">Login form</h1>
                <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="input" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {name === "" && email === "" && password === "" ?
                    <center><button className="form_button" onClick={Warn}>Login</button></center>
                    :
                    <center><button className="form_button" onClick={Log}>Login</button></center>
                }
            </div>
        </div>
    )
}
export default Login



















//old work

// import React from "react";
// import image from "../images/bg-image.png"
// import "./form.css"
// import { useState } from "react";
// import swal from 'sweetalert';
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     let navigate = useNavigate()
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const Log = () => {
//         let getName = localStorage.getItem("name")
//         let getEmail = localStorage.getItem("email")
//         let getPassword = localStorage.getItem("password")
//         if (name === "" || email === "" || password === "") {
//             swal('please enter valid')
//         }else if (getName !== name) {
//             swal("Name is Invalid")
//         }else if(getEmail !== email) {
//             swal("Email is Invalid")
//         }else if(getPassword != password) {
//             swal("Password is Invalid")
//         }
//         else {
//             swal('welcome' + " " + name)
//             navigate('/woman')
//             setName("")
//             setEmail("")
//             setPassword("")
//         }
//     }
//     return (
//         <div className="main_div">
//             <div className="image_div">
//                 <img className="image" src={image} />
//             </div>
//             <div className="form_div">
//                 <h1 className="form_heading">Login form</h1>
//                 <input type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input className="input" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input className="input" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <center><button  className="form_button" onClick={Log}>Login</button></center>
//             </div>
//         </div>
//     )
// }
// export default Login