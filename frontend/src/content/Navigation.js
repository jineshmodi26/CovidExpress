import React, { useState,useEffect } from 'react';
import axios from 'axios';
import '../css/Login.css';
import ErrorIcon from '@material-ui/icons/Error';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Info from '../content/Info';
import { Button } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Framer=()=>{
    // const [email,setemail]=useState("");
    // const [Password,setPassword]=useState("");
    // const [userData,setuserData]=useState([{}]);
    
    // const [emailerror,setemailerror]=useState("");
    // const [passworderror,setpassworderror]=useState("");
        
    // const [demail,setdemail]=useState("");
    // const [dpassword,setdpassword]=useState("");
    // const [address,setaddress]=useState("#");

    // const getData=async()=>{
    // const data=await axios.get("http://localhost:1000/registeredUser/existingUser").then((dataObject)=>{
    //     setuserData(dataObject.data.data);
    // });
    // }
    
    // function getEmailPassword()
    // {
    //     console.log("call");
    //     userData.map((value)=>{
    //         if(email==value.emailid)
    //         {
    //             setdemail(email);
    //             setdpassword(value.password);
    //         }
    //     });
    // }
    
    // async function submitData(){
       
    //     if(demail=="")
    //     {
    //         setemailerror("Invalid Email");
    //         setpassworderror("Invalid Password");
    //         document.getElementById('emailerror').style.display="block";
    //         document.getElementById('passworderror').style.display="block";
    //     }
    //     else
    //     {
    //         if(email==demail && Password==dpassword)
    //         {
    //             document.getElementById('emailerror').style.display="none";
    //             document.getElementById('passworderror').style.display="none";
    //             setaddress("/info");
    //             console.log("welcome to home page");
    //             window.history.forward();
    //             document.location.replace("http://localhost:3000/info");
    //         }
    //         else if(email!=demail)
    //         {
    //             setemailerror("Invalid Email");
    //             document.getElementById('emailerror').style.display="block";
    //         }
    //         else
    //         {
    //             setpassworderror("Invalid Password");
    //             document.getElementById('emailerror').style.display="none";
    //             document.getElementById('passworderror').style.display="block";
    //         }
    //     }  
    // }

    // const responseGoogle=(res)=>{
    //     console.log(res);
    // }

    return (
        <>
        
            <div className='temp'>Hello</div>
        </>
    );
}
export default Framer;