import React, { useEffect, useState } from 'react';
import NavPage from '../Navbar/NavBar';
import { GetInvoicesData } from '../../api';
import { DeleteInvoicesData } from '../../api';
import FileSaver from 'file-saver'


const EditInvoices = () => {
    const [viewInvoices,setViewInvoices] = useState([])
    
    useEffect(()=>{
        const getInvoices = async() => {
            const result = await GetInvoicesData()
            setViewInvoices(result.result)
            console.log(result)
        }
        getInvoices()
    },[])

    

    return(
        <div className="EditInvoices-page">
            <NavPage/>
            <div className="container" >
            <div className='row'>
                {
                    viewInvoices.map((data)=>(
                        <div className="col-md-4 col-12 mt-3 mx-auto" style={{textAlign: "center"}}>
                        <img className='' height="200px" src={`${data.Upload_Invoice}`} />
                        <h5 class="card-title">Invoice No {data.Invoice_Number}</h5>

                        <div className="card-body d-flex justify-content-between">
                        <button  onClick={()=> FileSaver.saveAs(`${data.Upload_Invoice}`,"Invoice")} className='btn btn-primary'>Download</button>
                        <button className='btn btn-primary' onClick={()=>{
                            localStorage.setItem('Sno',`${data.SNo}`);
                            if(!`${data.SNo}`){
                                window.location.href="/EditInvoices"
                            }
                            else{
                            window.location.href="/EditInvoicesDetails"
                               }
                            }}>Edit  </button>

                        <button onClick={async()=>{ await DeleteInvoicesData(`${data.SNo}`);window.location.reload()}} className='btn btn-primary' target="_blank">Delete</button>
                        </div>
                        </div>
                    ))
                }
            </div>
            </div>
            </div>
    )

}

export default EditInvoices
