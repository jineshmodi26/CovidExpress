import React, { useEffect, useState } from 'react';
import Nav from './Nav.js';
import axios from 'axios';
import '../css/Summary.css';
import ExploreIcon from '@material-ui/icons/Explore';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable'
import * as ReactBootstrap from 'react-bootstrap';
const Summary=()=>{
    
    const [totalc,setTotalc]=useState(0);
    const [totald,setTotald]=useState(0);
    const [totalr,setTotalr]=useState(0);
    const [loading,setLoading]=useState(false);
     const getData=async ()=>{
        // const res=await axios.get("https://api.covid19api.com/summary",{
        //     method:"get"
        // });
        const res=await axios.get("https://corona-api.com/countries",{
            method:"get",
        });
        setLoading(true);
        console.log(res);
        for(var i=0;i<res.data.data.length;i++)
        {
            var tr=document.createElement('tr');
            tr.setAttribute('id','trow');
            var td1=document.createElement('td');
            var td2=document.createElement('td');
            var td3=document.createElement('td');
            var td4=document.createElement('td');
            var td5=document.createElement('td');
            var td6=document.createElement('td');
            td1.innerHTML=res.data.data[i].name;
            td2.innerHTML=res.data.data[i].code;
            td3.innerHTML=res.data.data[i].updated_at;
            td4.innerHTML=res.data.data[i].latest_data.confirmed;
            td5.innerHTML=res.data.data[i].latest_data.deaths;
            td6.innerHTML=res.data.data[i].latest_data.recovered;
            document.getElementById('tbody').appendChild(tr);
            document.getElementById('tbody').appendChild(td1);
            document.getElementById('tbody').appendChild(td2);
            document.getElementById('tbody').appendChild(td3);
            document.getElementById('tbody').appendChild(td4);
            document.getElementById('tbody').appendChild(td5);
            document.getElementById('tbody').appendChild(td6);
            setTotalc(prevalue=>prevalue+res.data.data[i].latest_data.confirmed);
            setTotald(prevalue=>prevalue+res.data.data[i].latest_data.deaths);
            setTotalr(prevalue=>prevalue+res.data.data[i].latest_data.recovered);
        }
     }


    useEffect(() => {
        setTotalc(0);
        setTotald(0);
        setTotalr(0);
        getData();
      }, [])

      const createPDF=()=>{
          const doc=new jsPDF();
          doc.autoTable({html:'#my-table'});
          doc.save('table.pdf');
      }

    return (
        <>
        <Nav/>
        <div className="mapflex">
        <div className='globaldiv'>
        <h1 className='text-center globalupdate'>Global Update</h1><hr id="hr"/>
        <div className="globaldata">
        <h2>Total Confirmed :{totalc}</h2>
        <h2>Total Deaths :{totald}</h2>
        <h2>Total Recovered :{totalr}</h2>
        </div>
        </div>
        <div className="mapdiv">
        <Link to="/covidmap" data-toggle="tooltip" title="Map View" data-placement="bottom" ><motion.div whileHover={{ scale:1.2 }} initial={{ y:-200 }} animate={{ y:0 }}><ExploreIcon fontSize="large" className="mapicon"/></motion.div></Link>
        </div>
        </div>
           <div className='text-center summarydiv'>
               <table className='tablecss table-bordered table-striped' id='my-table'>
               <thead>
                    <tr className='tablehead'>
                        <th>Country</th>
                        <th>CountryCode</th>
                        <th>Date</th>
                        <th>Total Confirmed</th>
                        <th>Total Deaths</th>
                        <th>Total Recovered</th>
                   </tr>
                </thead>
               
                <tbody className='tb' id="tbody">
               </tbody>
               </table>
               <button className='btn btn-primary' onClick={createPDF}>Generate PDF</button>
           </div> 
        
                {
                    loading ? null : <ReactBootstrap.Spinner animation="border" className="loader1 text-center"/>
                }
        
        </>
    );
}
export default Summary;
