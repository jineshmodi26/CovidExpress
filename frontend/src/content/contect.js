/* eslint-disable react-hooks/rules-of-hooks */
import React ,{useState} from "react";
import '../css/Contact.css';
import Nav from './Nav';
import {motion} from 'framer-motion';
import { duration } from "@material-ui/core";

function contact() {

    const [name , setName] =useState("")
    const [email , setEmail] =useState()
    const [message , setMessage] =useState()

    function onsummitevent(event){
        event.preventDefault();
    }
    
    return (
        <>
            <Nav/>
            <div className="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <h3 className="heading mb-4">Let's talk about everything!</h3>
                                    <motion.p 
                                    initial={{ x:-200,opacity:0 }}
                                    animate={{ x:0,opacity:1 }}
                                    transition={{ duration:1 }}
                                    
                                    ><img src="images/undraw-contact.svg" alt="Image" className="img-fluid" /></motion.p>
                                </div>
                                <div className="col-md-6">
                                    <form className="mb-5 was-validated" method="post" id="contactForm" name="contactForm" onSubmit={onsummitevent}>
                                        <motion.div className="row"
                                        initial={{ x:200 }}
                                        animate={{ x:0 }}
                                        transition={{ duration:0.5 }}
                                        >
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control fc2 contact-input" name="name" id="name" placeholder="Your name"
                                                value={name} 
                                                onChange={(event)=>{
                                                    setName(event.target.value)
                                                }} required/>
                                                <div className="invalid-tooltip"></div>
                                            </div>
                                            
                                        </motion.div>
                                        <motion.div className="row "
                                        initial={{ x:200 }}
                                        animate={{ x:0 }}
                                        transition={{ delay:0.05,duration:0.5 }}
                                        >
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control fc2 contact-input" name="email" id="email" placeholder="Email" value={email} 
                                                onChange={(event)=>{
                                                    setEmail(event.target.value)
                                                }}/>
                                            </div>
                                        </motion.div>
                                        <motion.div className="row "
                                        initial={{ x:200 }}
                                        animate={{ x:0 }}
                                        transition={{ delay:0.1,duration:0.5 }}
                                        >
                                            <div className="col-md-12 form-group">
                                                <input type="text" className="form-control fc2 contact-input" name="subject" id="subject" placeholder="Subject" value={message} 
                                                onChange={(event)=>{
                                                    setMessage(event.target.value)
                                                }}/>
                                            </div>
                                        </motion.div>
                                        <motion.div className="row "
                                        initial={{ x:200 }}
                                        animate={{ x:0 }}
                                        transition={{ delay:0.15,duration:0.5 }}
                                        >
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control fc2 contact-input" name="message" id="message" cols={30} rows={7} placeholder="Write your message" defaultValue={""} />
                                            </div>
                                        </motion.div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" defaultValue="Send Message" className="btn btn-primary rounded-0 py-2 px-4 contactbtn" />
                                                <span className="submitting" />
                                            </div>
                                        </div>
                                    </form>
                                    <div id="form-message-warning mt-4" />
                                    <div id="form-message-success">
                                        Your message was sent, thank you!
                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact;