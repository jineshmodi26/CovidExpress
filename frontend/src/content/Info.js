import React from 'react';
//import { Router } from 'react-router-dom';
import '../css/Info.css';
import Nav from './Nav.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Summary from './Summary';
import {motion} from 'framer-motion';
const Info=()=>{
    return (
        <>
        <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}>
        <Nav/>
        <div className='jumbotron imgdiv'>
            <h1 className='text-center text-light'>Wear A Mask.Stay Safe</h1>
            <h4 className='text-center text-light'>"WE ARE IN THIS TOGATHER AND WE WILL GET THROUGH THIS,TOGATHER"</h4>
        </div>
        <div className='maindiv '>
        <div className="symptoms">
        <h1 className='text-center symptomshead'>Symptoms</h1>  
        <hr/>
        <div className='box'>
        <motion.div className='box-1'
        >
        <h3 >Most common symptoms:</h3>
            <ul>
                <li> Fever</li>
                <li> Dry cough</li>
                <li> Tiredness</li>
            </ul>
        </motion.div>
        <hr/>
        <div className='box-2'>
        <h3 >Less common symptoms:</h3>
            <ul>
                <li> Aches and pains</li>
                <li> Sore throat</li>
                <li> Diarrhoea</li>
                <li> Conjunctivitis</li>
                <li> Headache</li>
                <li> Loss of taste or smell</li>
                <li> A rash on skin, or discolouration of fingers or toes</li>
            </ul>
        </div>
        <hr/>
        <div className='box-3'>
            <h3 >Serious symptoms:</h3>
            <ul>
                <li> Aifficulty breathing or shortness of breath</li>
                <li> Chest pain or pressure</li>
                <li> Loss of speech or movement</li>
            </ul>
        </div>
        <hr/>
        </div>
        <div className='box-4'>
        <h2></h2>
            <p>
            Seek immediate medical attention if you <br/>
            have serious symptoms. Always call before <br/>
            visiting your doctor or health facility.<br/><br/>
            People with mild symptoms who are otherwise <br/>
            healthy should manage their symptoms at home.<br/><br/>
            On average it takes 5–6 days from when someone <br/>
            is infected with the virus for symptoms to show, <br/>
            however it can take up to 14 days.
            </p>
        </div>
    </div>
    <div className='maindiv2'>
    <div className='prevention'>
    <h1 className='text-center preventionhead'>Prevention</h1>
    <hr/>
    <div className="preventiondetails">
        <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.</p>
        <hr/>
        <h3>To prevent the spread of COVID-19:</h3>
        <br/>
        <p>
• Clean your hands often. Use soap and water, or an alcohol-based hand rub.<br/>
• Maintain a safe distance from anyone who is coughing or sneezing.<br/>
• Wear a mask when physical distancing is not possible.<br/>
• Don’t touch your eyes, nose or mouth.<br/>
• Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.<br/>
• Stay home if you feel unwell.<br/>
• If you have a fever, cough and difficulty breathing, seek medical attention.<br/><br/>
Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.
        </p>
    </div>  
    <hr/>   
 </div>
 <div className='treatment'>
        <h1 className='text-center treatmenthead'>Treatments</h1>
        <hr/>
        <h4 className='s1 font-weight-bold'>1.Self Care</h4>
        <p  id='selfcare'>If you feel sick you should rest, drink plenty of fluid,
        and eat nutritious food. Stay in a separate room from other     
        family members, and use a dedicated bathroom if possible.
         Clean and disinfect frequently touched surfaces.<br/><br/>
        Everyone should keep a healthy lifestyle at home. 
        Maintain a healthy diet, sleep, stay active,
        and make social contact with loved ones through
        the phone or internet. Children need extra
        love and attention from adults during difficult times.    
        Keep to regular routines and schedules as much as possible.<br/><br/>
        It is normal to feel sad, stressed, or confused during a crisis.
        Talking to people you trust, such as friends and family, can help
        If you feel overwhelmed, talk to a health worker or counsellor.</p>

        <h4 className='m1 font-weight-bold'>2.Medical Treatments</h4>
        <p id='medcare'>If you have mild symptoms and are otherwise healthy, self-isolate and contact your medical provider or a COVID-19 information line for advice.<br/><br/>
Seek medical care if you have a fever, cough, and difficulty breathing. Call in advance.</p>
 </div>
    </div>
    </div>
    </motion.div>
        </>
    );
}
export default Info;