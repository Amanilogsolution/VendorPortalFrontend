import React, { useEffect, useState } from 'react';
import NavPage from '../Navbar/NavBar';
import { GetInvoicesDataUpdate } from '../../api/index';
import { UpdateInvoicesdetails } from '../../api/index';
import Homefooter from '../footer/footer';



function EditInvoicesDetails() {
    const [vendorInfo,setVendorInfo] = useState({})

    useEffect(()=>{
        const details = async() =>{
            const results = await GetInvoicesDataUpdate(localStorage.getItem('Sno'))
            console.log(results)
            setVendorInfo(results[0])
        }
        details()
    },[])
   
    const handleSubmit = async(e) => {
        e.preventDefault();
        const Invoice_Date = document.getElementById('Invoice_Date').value;
        const Invoice_Amount = document.getElementById('Invoice_Amount').value;

        var today = new Date();
        const Invoice_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
    
       const result = await UpdateInvoicesdetails(localStorage.getItem('Sno'),Invoice_Date,Invoice_Amount,Invoice_time)
       console.log(result)
        alert("Your Data Updated")
        localStorage.removeItem('Sno')
        window.location.href='/EditInvoices'
    }
 const handleChangedate = (e) => {
    setVendorInfo({...vendorInfo,Invoice_Date: e.target.value})
 }
 const handleChangeamount = (e) => {
    setVendorInfo({...vendorInfo,Invoice_Amount: e.target.value})
 }
    
    return (
        <div>
            <NavPage/>
        <div className="page Upage-vonder">
            {/* {JSON.stringify(vendorInfo)} */}

            <div className="">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col col-md-6 ">
                            <h2> Update Invoice Details</h2>
                            <div className="card p-3 my-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="Invoice_no" className="form-label">Invoice Number</label>
                                            <input class="form-control" type="text" id="Invoice_no" value={vendorInfo.Invoice_Number} disabled readonly/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="Invoice_Date" className="form-label">Invoice Date </label>
                                            <input className="form-control" type="date" id="Invoice_Date" value={vendorInfo.Invoice_Date} onChange={(e) => handleChangedate(e)}/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="Invoice_Amount" className="form-label">Invoice Amount</label>
                                            <input type="text" className="form-control" id="Invoice_Amount" aria-describedby="emailHelp" value={vendorInfo.Invoice_Amount} onChange={(e) => handleChangeamount(e)} />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Invoice Status</label>
                                            <input type="text" className="form-control" id="Invoice_Status" aria-describedby="emailHelp" value={vendorInfo.Invoice_status}/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Supporting Status</label>
                                            <input type="text" className="form-control" id="status" aria-describedby="emailHelp" value={vendorInfo.status}/>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">All Invoices</label>
                                            <input type="text" className="form-control" id="all_invoices" aria-describedby="emailHelp" value={vendorInfo.All_Invoices}/>
                                        </div>
                                            <br/>
                                        <button type="submit" className="btn btn-primary">Update Data</button>
                                        <button style={{marginLeft:'50px'}} className="btn btn-danger" onClick={(e)=>{
                                                e.preventDefault()
                                                  window.location.href='/TotalInvoices'
                                          }}>
                                            Cancel
                                            </button>  
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Homefooter/>
     </div>
    )
}

export default EditInvoicesDetails