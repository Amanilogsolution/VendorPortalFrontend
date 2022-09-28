import React, { useState } from 'react';
import NavPage from '../Navbar/NavBar';
import { AddSupportingData } from '../../api';
import {UploadData} from '../../api/index'
import InvoicesPractice from '../Practice/InvoicePractice';
import Homefooter from '../footer/footer';

const AddSupporting = () => {
    const [file,setFile] = useState('')
    const[selected,setSelected] = useState('')

    const handleClick = async(e) => {
        e.preventDefault();
        const Reference_Number = document.getElementById('Reference_no').value
      
        const data = new FormData();
        data.append("images",file)
        data.append("Reference_no",Reference_Number)

        data.append("Referance_Type",selected)           
        const result = await AddSupportingData(data)
        console.log(data)
        console.log(result)
        alert("Added")
        window.location.href='/Supporting'
    }
   const handleClickselect = (e) => {
        const data = e.target.value
        if(data === 'LR/AWB'){
              console.log(data)
              setSelected(data)
            }
        else if( data=== 'Other'){
            console.log(data)
            setSelected(data)
        }else{
            console.log('Select')
        }
   }
    return(
        <div className="Add-Supporting-page">
        <NavPage/>
                    <div className="row d-flex justify-content-center align-items-center" style={{overflow:"hidden"}}>
                        <div className="col col-md-6 ">
                            <h2>Add Supporting</h2>

                            <div className="card p-3 my-5">
                                <form>
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="Reference_no" className="form-label">Reference Number</label>
                                            <input className="form-control" type="text" id="Reference_no"/>
                                        </div>

                                        <div className="mb-3">                            
                                        <select className="form-select w-100 p-2 border border-light" onClick={handleClickselect}>
                                        <option selected>Open this select menu</option>
                                        <option value="LR/AWB" >LR/AWB</option>
                                        <option value="Other">Other</option>
                                         </select>
                                        </div>

                                        {/* <div className="mb-3">
                                            <label htmlFor="Referance_Type" className="form-label">Referance Type</label>
                                            <input className="form-control" type="text" id="Referance_Type"/>
                                        </div> */}

                                        <div className="mb-3">
                                            <label htmlFor="Upload_Date" className="form-label">Upload Document</label>
                                            <input className="form-control" type="file" id="Upload_Document" onChange={event=>{ const document = event.target.files[0];
                                                                                                            setFile(document)}}
                                                                                                            />
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="Invoice_Number" className="form-label">Invoice Number</label>
                                            <input className="form-control" type="text" id="Invoice_Number"/>
                                        </div> */}
                                     
                                        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Supporting</button>

                                        <button style={{marginLeft:'50px'}} className="btn btn-danger" onClick={(e)=>{
                                                e.preventDefault()
                                                  window.location.href='/Supporting'
                                          }}>
                                            Cancel
                                            </button>  

                                    </div>
                                </form>

                            </div>
                        </div>
                        {/* <InvoicesPractice/> */}

                    </div>
                    <Homefooter/>

            </div>   
              )
}

export default AddSupporting