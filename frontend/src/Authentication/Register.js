import React, { useState } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import WcIcon from '@material-ui/icons/Wc';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../css/Register.css';
const Register=()=>{

    const[userName,setuserName]=useState("");
    const[emailId,setemailId]=useState("");
    const[Gender,setGender]=useState("");
    const[Password,setPassword]=useState("");
    const[cPassword,setcPassword]=useState("");
    const[IsActive,setisActive]=useState(false);
   
    const[userNameerror,setuserNameerror]=useState("");
    const[emailerror,setemailerror]=useState("");
    const[passworderror,setPassworderror]=useState("");
    const[cpassworderror,setcPassworderror]=useState("");
    const[isValid,setValid]=useState("true");
    const[success,setSuccess]=useState("");
    const[alreadyexist,setalreadyexist]=useState("yes");
    
    function setMale(event){
        setGender(event.target.value);
        console.log(event.target.value);
    }

    function setFemale(event){
        console.log(event.target.value);
        setGender(event.target.value);
    }
    
    function validation(){
        if(userName=="")
        {   
            setValid("false");
            setuserNameerror(" Username Is Empty");
            document.getElementById("usernameerror").style.display="block";
        }
        else
        {
            document.getElementById("usernameerror").style.display="none";
        }
        if(Gender=="")
        {
            setValid("false");
            document.getElementById("gendererror").style.display="block";
        }
        else
        {
            document.getElementById("gendererror").style.display="none";
        }
        if(emailId=="")
        {
            setemailerror(" Email Is Empty");
            setValid("false");
            document.getElementById("emailerror").style.display="block";
        }
        else
        {
            if(!emailId.includes('@') || !emailId.includes('.'))
            {
                setemailerror(" Invalid Email");
                setValid("false");
                document.getElementById("emailerror").style.display="block";
            }
            else
            {
                document.getElementById("emailerror").style.display="none";
            }
        }
        if(Password=="")
        {
            setPassworderror(" Password Is Empty");
            setValid("false");
            document.getElementById("passworderror").style.display="block";
        }
        else
        {
            if(Password.length<6)
            {
                setPassworderror(" Password Is Too Short");
                setValid("false");
                document.getElementById("passworderror").style.display="block";
            }
            else
            {
                document.getElementById("passworderror").style.display="none";
            }
        }
        if(cPassword=="")
        {
            setcPassworderror(" Confirm Password Is Empty");
            setValid("false");
            document.getElementById("cpassworderror").style.display="block";
        }
        else
        {
            if(cPassword!=Password)
            {
                setcPassworderror(" Passwords Must be Same");
                setValid("false");
                document.getElementById("cpassworderror").style.display="block";
            }
            else
            {
                setisActive(false);
                document.getElementById("cpassworderror").style.display="none";
            }
        }
    }

    async function submitData(){
        validation();
        if(isValid=="true")
        {
            const response= await fetch("http://localhost:1000/addUser/addNewUser",{
            method:'post',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                username:userName,
                gender:Gender,
                emailid:emailId,
                password:Password,
                cpassword:cPassword,
                isActive:IsActive
            })
        });
        const res = await response.json();
        setalreadyexist("no");
        setSuccess("Registered Successfully.");
        document.getElementById("success").style.paddingLeft="110px";
        document.getElementById("success").style.display="block";
        //setValid("false");    
        }
        else{
            console.log("Not Submitted");
            document.getElementById("success").style.display="none";
            setValid("true");
        }
        }
        const finalsubmit=()=>{
            submitData();
                    console.log(alreadyexist);
                    console.log("isValid :",isValid);
                    if(alreadyexist=="yes")
                    {
                        setSuccess("Email is Already Exist");
                        if(isValid=="false")
                        {
                            document.getElementById("success").style.paddingLeft="118px";
                            document.getElementById("success").style.display="none";
                        }
                        else{
                            document.getElementById("success").style.display="block";
                        }
                    }
                    else{
                        setSuccess("Email is Already Exist");
                        document.getElementById("success").style.paddingLeft="118px";
                        document.getElementById("success").style.display="block";
                        setalreadyexist("yes");
                    }
        }
    return (
        <>
            <motion.div className="wrapper">
			<motion.div className="inner"
            initial={{ x:-300 }}
            animate={{ x:0 }}
            transition={{ duration:1 }}
            >
				<form onSubmit={(event)=>{
                    event.preventDefault();
                    finalsubmit();
                }} className="registerform">
					<motion.h3 className="heading"
                    initial={{ y:-200 }}
                    animate={{ y:0 }}
                    transition={{ duration:1,type:'spring',stiffness:90 }}
                    >Registration</motion.h3>
					<div className="form-group fg">
						<motion.div className="form-wrapper fw"
                        initial={{ x:-200 }}
                        animate={{ x:0 }}
                        transition={{ type:'spring' }}
                        >
							<label className="label"><PersonIcon/> Username</label>
							<motion.input type="text" 
                            className="form-control fc inputcss" 
                            name="username" 
                            id="usererror"
                            placeholder="Enter Username"
                            value={userName} 
                            onChange={(event)=>setuserName(event.target.value)}
                            whileHover={{ scale:1.02,boxShadow:"0px 0px 8px white" }}
                            transition={{ duration:0 }}  
                            />
                            <div style={{color:"red", display:"none",paddingLeft:"0px",paddingTop:"5px",fontFamily:"Multi-Blod"}} id="usernameerror"><ErrorIcon fontSize="small"/>{userNameerror}</div>
						</motion.div>
						<motion.div className="form-wrapper fw"
                        initial={{ x:200 }}
                        animate={{ x:0 }}
                        transition={{ duration:0.7 }}
                        >
							<label><WcIcon /> Gender</label>
							<div className="gender">
								<div className="male">
									<span>Male</span>
									<input type="radio" 
                                    className="r1 inputcss" 
                                    name="gender" 
                                    onChange={setMale}
                                    value="Male"
                                    />
								</div>
								<div className="female">
									<span>Female</span>
									<input type="radio" 
                                    className="r1 inputcss"  
                                    name="gender" 
                                    onChange={setFemale}
                                    value="Female" 
                                    />
								</div>
							</div>
                            <div style={{color:"red", display:"none",paddingLeft:"0px",paddingTop:"23px",fontFamily:"Multi-Blod"}} id="gendererror"><ErrorIcon fontSize="small"/> Select Gender</div>
						</motion.div>
					</div>
					<motion.div className="form-wrapper fw"
                    initial={{ x:-200 }}
                    animate={{ x:0 }}
                    transition={{ type:'spring' }}
                    >
						<label><EmailIcon fontSize="small"/> Email</label>
						<motion.input type="text" 
                        className="form-control fc inputcss" 
                        name="emailid" 
                        placeholder="Enter Your Email" 
                        value={emailId} 
                        onChange={(event)=>setemailId(event.target.value)}
                        whileHover={{ scale:1.02,boxShadow:"0px 0px 8px white" }}
                        transition={{ duration:0 }}
                        />
                        <div style={{color:"red", display:"none",paddingLeft:"0px",paddingTop:"5px",fontFamily:"Multi-Blod"}} id="emailerror"><ErrorIcon fontSize="small"/>{emailerror}</div>
					</motion.div>
					<motion.div className="form-wrapper fw"
                    initial={{ x:-200 }}
                    animate={{ x:0 }}
                    transition={{ type:'spring' }}
                    >
						<label><LockIcon fontSize="small"/> Password</label>
						<motion.input type="password" 
                        className="form-control fc inputcss" 
                        name="password" 
                        placeholder="Enter Password " 
                        value={Password} 
                        onChange={(event)=>setPassword(event.target.value)}
                        whileHover={{ scale:1.02,boxShadow:"0px 0px 8px white" }}
                        transition={{ duration:0 }}
                        />
                        <div style={{color:"red", display:"none",paddingLeft:"0px",paddingTop:"5px",fontFamily:"Multi-Blod"}} id="passworderror"><ErrorIcon fontSize="small"/>{passworderror}</div>
					</motion.div>
					<motion.div className="form-wrapper fw"
                    initial={{ x:-200 }}
                    animate={{ x:0 }}
                    transition={{ type:'spring' }}
                    >
						<label><LockIcon fontSize="small"/> Confirm Password</label>
						<motion.input type="password" 
                        className="form-control fc inputcss" 
                        name="cpassword" 
                        placeholder="Enter Confirm Password" 
                        value={cPassword} 
                        onChange={(event)=>setcPassword(event.target.value)}
                        whileHover={{ scale:1.02,boxShadow:"0px 0px 8px white" }}
                        transition={{ duration:0 }}
                        />
                        <div style={{color:"red", display:"none",paddingLeft:"0px",paddingTop:"5px",fontFamily:"Multi-Blod"}} id="cpassworderror"><ErrorIcon fontSize="small"/>{cpassworderror}</div>
					</motion.div>
		
					<motion.div className="login100-form-bgbtn "
                    initial={{ y:200 }}
                    animate={{ y:0 }}
                    transition={{ duration:1,type:'spring',stiffness:90 }}>
						<button type="submit" className="login100-form-btn regibtn" id="register" value="false" onClick={validation}>Register Now</button>
                        <div style={{color:"white",display:"none",paddingTop:"10px",fontFamily:"Multi-Blod"}} id="success">{success}</div>
					</motion.div>
                    <div className="loginfoot">
						<span className="already1">
							Already Have An Account ? 
						</span>

						<Link to="Login" className="signin">
							Sign In
						</Link>
					</div>
				</form>
			</motion.div>
		</motion.div>
        </>
    );
}

export default Register;