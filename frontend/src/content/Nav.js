import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav=()=>{
    return (
        <>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark text-white navdiv'>
    <div className='container navdiv'>
    <motion.a className='navbar-brand title' whileHover={{ scale:1.2 }}>
        Covid19
    </motion.a>
    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarid'>
        <span className='navbar-toggler-icon'></span>
    </button>
    <div id='navbarid' className='collapse navbar-collapse'>
    <ul className='navbar-nav ml-auto text-center'>
            
            <motion.div className="nav-border" whileHover={{ scale:1.2 }}>
            <motion.li className='nav-item' whileHover={{textShadow:"0px 0px 10px white"}}>
                <Link to="/info" className="nav-link">Home</Link>
            </motion.li>
            </motion.div>

            <motion.div className="nav-border" whileHover={{ scale:1.2 }}>
            <motion.li className='nav-item' whileHover={{ textShadow:"0px 0px 10px white"}}>
                <Link to="/Summary" className="nav-link">Summary</Link>
            </motion.li>
            </motion.div>

            <motion.div className="nav-border" whileHover={{ scale:1.2 }}>
            <motion.li className='nav-item' whileHover={{ textShadow:"0px 0px 10px white"}}>
                <Link to="/status" className="nav-link">Status</Link>
            </motion.li>
            </motion.div>

            {/* <motion.div className="nav-border" whileHover={{ scale:1.2 }}>
            <motion.li className='nav-item' whileHover={{ textShadow:"0px 0px 10px white"}}>
                <Link to="/feedback" className="nav-link">Feedback</Link>
            </motion.li>
            </motion.div> */}

            <motion.div className="nav-border" whileHover={{ scale:1.2 }}>
            <motion.li className='nav-item' whileHover={{ textShadow:"0px 0px 10px white"}}>
                <Link to="/contact" className="nav-link">Contact</Link>
            </motion.li>
            </motion.div>

            <motion.div className="nav-border" whileHover={{ scale:1.2 }}>
            <motion.li className='nav-item' whileHover={{ textShadow:"0px 0px 10px white"}}>
                <a className="nav-link logout" onClick={()=>{window.history.forward();
                document.location.replace("http://localhost:3000/login");}}>Logout</a>
            </motion.li>
            </motion.div>

        </ul>
    </div>
    </div>
    
    </nav>
       </> 
    );

}
export default Nav;