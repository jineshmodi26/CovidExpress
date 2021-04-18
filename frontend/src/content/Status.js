import React, { useState } from 'react';
import Nav from './Nav.js'
import jsPDF from 'jspdf';
import '../css/Status.css';

const Status=()=>{
    const [Email,setEmail]=useState("");
    const [Name,setName]=useState("");
    const [Fever,setFever]=useState("");
    const [Cough,setCough]=useState("");
    const [Tiredness,setTiredness]=useState("");
    const [Pain,setPain]=useState("");
    const [Sorethroat,setSorethroat]=useState("");
    const [Diarrhoea,setDiarrhoea]=useState("");
    const [Headache,setHeadache]=useState("");
    const [Smelllose,setSmelllose]=useState("");
    const [Rash,setRash]=useState("");
    const [Breathshortness,setBreathshortness]=useState("");
    const [Chestpain,setChestpain]=useState("");
    const [Speechlose,setSpeechlose]=useState("");
    const [status,setStatus]=useState("");
    const [count,setCount]=useState(0);
    const [emailerror,setEmailerror]=useState("Enter Email");
    const [nameerror,setNameerror]=useState("Enter Name");

    const getdata=()=>{
        console.log(Email);
        console.log(Name);
        console.log(Fever);
        console.log(Cough);
        console.log(Tiredness);
        console.log(Pain);
        console.log(Sorethroat);
        console.log(Diarrhoea);
        console.log(Headache);
        console.log(Smelllose);
        console.log(Rash);
        console.log(Breathshortness);
        console.log(Chestpain);
        console.log(Speechlose);
        console.log(count);
    }

    const submitData=async()=>{
        try{
            const response=await fetch("http://localhost:1000/createUserStatus/addUserStatus",{
                method:'post',
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    email:Email,
                    name:Name,
                    fever:Fever,
                    cough:Cough,
                    tiredness:Tiredness,
                    pain:Pain,
                    sorethroat:Sorethroat,
                    diarrhoea:Diarrhoea,
                    headache:Headache,
                    smelllose:Smelllose,
                    rash:Rash,
                    breathshortness:Breathshortness,
                    chestpain:Chestpain,
                    speechlose:Speechlose
                })
            });
            const res=await response.json();
            console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }

    const validation=()=>{
                if(count<=0)
                {
                    document.getElementById("sresult").style.backgroundColor='lime';
                    setStatus("You Are Safe.");
                }
                else if(count>0 && count<=3)
                {
                    document.getElementById("sresult").style.backgroundColor='yellow';
                    setStatus("You Need To Take Care.");
                }
                else if(count>3) 
                {
                    document.getElementById("sresult").style.backgroundColor='red';
                    setStatus("Go For Emergency Medical Care Immediately.");
                }
    }

    const createPDF=()=>{
        var doc=new jsPDF('p','pt');
        doc.text(20,20,`Email : ${Email}`);
        doc.text(20,40,`Name : ${Name}`);
        doc.text(20,60,`1.Do you have fever ? : ${Fever}`);
        doc.text(20,80,`2.Do you have Dry Cough ? : ${Cough}`);
        doc.text(20,100,`3.Do you Feel Tiredness? : ${Tiredness}`);
        doc.text(20,120,`4.Do you have any aches or pain ? : ${Pain}`);
        doc.text(20,140,`5.Do you have Sore Throat ? : ${Sorethroat}`);
        doc.text(20,160,`6.Do you suffer from diarrhoea ? : ${Diarrhoea}`);
        doc.text(20,180,`7.Do you suffer from headache ? : ${Headache}`);
        doc.text(20,200,`8.Do you lose sense of smell ? : ${Smelllose}`);
        doc.text(20,220,`9.Do you have any skin rashes ? : ${Rash}`);
        doc.text(20,240,`10.Do you Feel Shortness of Breath ? : ${Breathshortness}`);
        doc.text(20,260,`11.Do you have chest pain ? : ${Chestpain}`);
        doc.text(20,280,`12.Do you suffer from lose of speech ? : ${Speechlose}`); 
        doc.text(20,300,`Status : ${status}`);
        doc.save('status.pdf');
    }
    
    return (
        <>
        <Nav/>
        <div className="flexdiv">
        <div className="innerdiv1">
            <form className="container" 
            onSubmit={(event)=>{
                event.preventDefault();
                submitData();
                validation();
            }}>
            <div className="statusdiv">
            <h1 className="text-center shead">Know Your Status</h1>
            <hr/>
            <fieldset>
                <div className="form-group status">
                <div className="email">
                    <label>Email :</label>
                    <input type="Email" 
                    placeholder={emailerror} 
                    className="form-control col-6 semail"
                    value={Email}
                    onChange={(event)=>{setEmail(event.target.value)}}
                    />
                </div>
                <div className="w3-circle">
                    <label className="statuslabel">Status : </label>
                    <div className="sresult" id="sresult"></div>
                </div>
                </div>
                <div className="name">
                <div className="form-group name1">
                    <label>Name :</label>
                    <input type="text" 
                    placeholder={nameerror} 
                    className="form-control col-6 sname"
                    value={Name}
                    onChange={(event)=>{setName(event.target.value)}}
                    />
                </div>
                </div>
                <table className="stable table-striped table-bordered">
                <tbody>

                <tr>
                <td className="tcolumn">1.</td>
                    <td className="tcolumn"><label>Do you have fever ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="fever" value="Yes" onChange={(event)=>{setFever(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="fever" value="No" onChange={(event)=>{setFever(event.target.value);
                    }}/></td>
                </tr>

                <tr>
                <td className="tcolumn">2.</td>
                    <td className="tcolumn"><label>Do you have Dry Cough ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="cough" value="Yes" onChange={(event)=>{setCough(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="cough" value="No" onChange={(event)=>{setCough(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">3.</td>
                    <td className="tcolumn"><label>Do you Feel Tiredness?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Tiredness" value="Yes" onChange={(event)=>{setTiredness(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Tiredness" value="No" onChange={(event)=>{setTiredness(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">4.</td>
                    <td className="tcolumn"><label>Do you have any aches or pain ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Pain" value="Yes" onChange={(event)=>{setPain(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Pain" value="No" onChange={(event)=>{setPain(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">5.</td>
                    <td className="tcolumn"><label>Do you have Sore Throat ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Sorethroat" value="Yes" onChange={(event)=>{setSorethroat(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Sorethroat" value="No" onChange={(event)=>{setSorethroat(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">6.</td>
                    <td className="tcolumn"><label>Do you suffer from diarrhoea ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Diarrhoea" value="Yes" onChange={(event)=>{setDiarrhoea(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Diarrhoea" value="No" onChange={(event)=>{setDiarrhoea(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">7.</td>
                    <td className="tcolumn"><label>Do you suffer from headache ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Headache" value="Yes" onChange={(event)=>{setHeadache(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Headache" value="No" onChange={(event)=>{setHeadache(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">8.</td>
                    <td className="tcolumn"><label>Do you lose sense of smell ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Smelllose" value="Yes" onChange={(event)=>{setSmelllose(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Smelllose" value="No" onChange={(event)=>{setSmelllose(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">9.</td>
                    <td className="tcolumn"><label>Do you have any skin rashes ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Rash" value="Yes" onChange={(event)=>{setRash(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Rash" value="No" onChange={(event)=>{setRash(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">10.</td>
                    <td className="tcolumn"><label>Do you Feel Shortness of Breath ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Breathshortness" value="Yes" onChange={(event)=>{setBreathshortness(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Breathshortness" value="No" onChange={(event)=>{setBreathshortness(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">11.</td>
                    <td className="tcolumn"><label>Do you have chest pain ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Chestpain" value="Yes" onChange={(event)=>{setChestpain(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Chestpain" value="No" onChange={(event)=>{setChestpain(event.target.value);}}/></td>
                </tr>

                <tr>
                <td className="tcolumn">12.</td>
                    <td className="tcolumn"><label>Do you suffer from lose of speech ?</label></td>
                    <td className="tcolumn"><span className="fever">Yes</span><input type="radio" name="Speechlose" value="Yes" onChange={(event)=>{setSpeechlose(event.target.value);setCount(count+1)}}/></td>
                    <td className="tcolumn"><span className="fever">No</span><input type="radio" name="Speechlose" value="No" onChange={(event)=>{setSpeechlose(event.target.value);}}/></td>
                </tr>

                </tbody>
                </table>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                    <h3 className="modal-title">Your Status</h3>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <h4>{status}</h4>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                 </div>
            </div> 
            </div>
         </div>
                <div className='btndiv'>
                    <button className="btn btn-primary pdfbtn" onClick={createPDF} >Generate PDF</button>
                    <button className="btn btn-success statusbtn" type="submit" onClick={getdata} data-toggle="modal" data-target="#myModal">Submit</button>
                </div>
            </fieldset>
            </div>
            </form>
            </div>
        <div className="innerdiv2">
        <h4 className="text-center shead2">What's Your Status</h4>  
        <hr/>    
                <div className="w3-circle1">               
                    <label className="statuslabel">1.Safe : </label>
                    <div className="sresult1" id="sresult"></div>              
                </div>
                <div className="w3-circle1">   
                    <label className="statuslabel">2.Warning : </label>
                    <div className="sresult2" id="sresult"></div>               
                </div>
                <div className="w3-circle1">  
                    <label className="statuslabel">3.Emergency : </label>
                    <div className="sresult3" id="sresult"></div>             
                </div>
                <hr/>
                <div className="statusinfo">
                    <p>1. If the color of circle is green that means you are safe.</p>
                    <p>2 .If the color of circle is Yellow that means you some sysmptoms of corona virus and you need to take care.</p>
                    <p>3. If the color of circle is red that means you almost have corona virus and Immediately you need to go for Emergency Medical Care.</p>
                </div>
                
        </div>
        </div>
        </>
    );
}
export default Status;