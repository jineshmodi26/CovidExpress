import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../css/Login.css';
import ErrorIcon from '@material-ui/icons/Error';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Info from '../content/Info';
import { Button } from 'reactstrap';
import GoogleLogin from 'react-google-login';
import {BrowserRouter, Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Login=()=>{
    const [email,setemail]=useState("");
    const [Password,setPassword]=useState("");
    const [userData,setuserData]=useState([{}]);
    
    const [emailerror,setemailerror]=useState("");
    const [passworderror,setpassworderror]=useState("");
        
    const [demail,setdemail]=useState("");
    const [dpassword,setdpassword]=useState("");
    const [address,setaddress]=useState("#");

    const getData=async()=>{
    const data=await axios.get("http://localhost:1000/registeredUser/existingUser").then((dataObject)=>{
        setuserData(dataObject.data.data);
    });
    }
    
    function getEmailPassword()
    {
        console.log("call");
        userData.map((value)=>{
            if(email==value.emailid)
            {
                setdemail(email);
                setdpassword(value.password);
            }
        });
    }
    
    async function submitData(){
       
        if(demail=="")
        {
            setemailerror("Invalid Email");
            setpassworderror("Invalid Password");
            document.getElementById('emailerror').style.display="block";
            document.getElementById('passworderror').style.display="block";
        }
        else
        {
            if(email==demail && Password==dpassword)
            {
                document.getElementById('emailerror').style.display="none";
                document.getElementById('passworderror').style.display="none";
                setaddress("/info");
                console.log("welcome to home page");
                window.history.forward();
                document.location.replace("http://localhost:3000/info");
            }
            else if(email!=demail)
            {
                setemailerror("Invalid Email");
                document.getElementById('emailerror').style.display="block";
            }
            else
            {
                setpassworderror("Invalid Password");
                document.getElementById('emailerror').style.display="none";
                document.getElementById('passworderror').style.display="block";
            }
        }  
    }

    const responseGoogle=(res)=>{
        console.log(res);
    }
    const route=(res)=>{
        console.log(res);
        window.history.forward();
        document.location.replace("http://localhost:3000/info");
    }

    const exitVarients={
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                duration:1
            }
        }
    }

    return (
        <>    
            <motion.div className="limiter" 
            variants={exitVarients}
            initial="hidden"
            animate="visible"
            >
		<motion.div className="back1"
        // initial={{ backgroundImage:'linear-gradient(blue,deeppink)' }}
        // animate={{ backgroundImage:'linear-gradient(deeppink,purple)' }}
        // transition={{ delay:2, duration:7 }}
        >
			<motion.div className="p-l-55 p-r-55 p-t-65 p-b-54 back2"
            initial={{ x:-200 }}
            animate={{ x:0 }}
            transition={{duration:1}}>
				<form className="loginform" onSubmit={(event)=>{
                    event.preventDefault();
                    submitData();
                    
                }}>
					<motion.span className="p-b-49 login"
                    initial={{ y:-100 }}
                    animate={{ y:0 }}
                    transition={{delay:0.5, duration:0.7 }}    
                    >
						Login
					</motion.span>

					<motion.div className="wrap-input100 m-b-23" data-validate = "Username is reauired"
                    initial={{ x:"-200vh" }}
                    animate={{ x:0 }}
                    transition={{delay:0.7, type:'spring' }}
                    >
						<span className="label-input100 userhead"><EmailIcon fontSize="small"/> Email</span>
						<motion.input className="input100 form-control fc1" 
                        type="text" 
                        name="emailid" 
                        placeholder="Type your email"
                        value={email}
                        onChange={(event)=>{setemail(event.target.value);getData();}} 
                        whileHover={{ scale:1.02,boxShadow:"0px 0px 8px white" }}    
                        transition={{ duration :0 }}
                        />
                        <motion.div 
                        style={{display:"none",color:"red",fontFamily:"Multi-Blod",paddingTop:"5px"}} 
                        id="emailerror"><ErrorIcon fontSize="small"/> {emailerror}</motion.div>
					</motion.div>

					<motion.div className="wrap-input100 validate-input" data-validate="Password is required" 
                    initial={{ x:"-200vh" }}
                    animate={{ x:0 }}
                    transition={{delay:0.7, type:'spring' }}
                    >
						<span className="label-input100 passhead"><LockIcon fontSize="small"/>Password</span>
						<motion.input className="input100 form-control fc1" 
                        type="password" 
                        name="password" 
                        placeholder="Type your password"
                        value={Password}
                        onChange={(event)=>{setPassword(event.target.value)}} 
                        whileHover={{ scale:1.02,boxShadow:"0px 0px 8px white" }}
                        transition={{ duration:0 }}    
                        />
                        <div style={{display:"none",color:"red",fontFamily:"Multi-Blod",paddingTop:"5px"}} id="passworderror"><ErrorIcon fontSize="small"/> {passworderror}</div>
					</motion.div>
					
					<motion.div 
                    initial={{y:200}}
                    animate={{x:0,y:0}}
                    transition={{duration:1}}
                    >
                        <motion.div whileHover={{ scale:1.1 }} style={{ color:'black' }}>
                            <motion.button className="loginbtn2" type="submit" onClick={getEmailPassword} whileHover={{ color:'black' }}>Login
						    </motion.button>
                        </motion.div> 
                        <hr style={{ marginTop:'10px', color:'wheat'}}/>       
                    </motion.div>
                    <h6 className="loginoption text-center">Or Login Using</h6>
                    <motion.div className="loginbtn" initial={{ y:200 }} animate={{ y:0 }} transition={{ duration:1 }}>
                        <GoogleLogin className="googlelogin"
                            clientId="322152570864-q1t79oi6c8cgftq59f7v13j14t6hngae.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={route}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        /> 
                    </motion.div>
					<div className="flex-col-c p-t-155 foot">
						<span className="txt1 p-b-17 already">
							Don't Have An Account ? 
						</span>

                        <Link to="/register" className="signup">Sign Up</Link>
					</div>
				</form>
			</motion.div>
		</motion.div>
	</motion.div>
    
        </>
    );
}
export default Login;