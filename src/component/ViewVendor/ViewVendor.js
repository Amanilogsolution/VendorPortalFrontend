import React, { useEffect, useState } from 'react';
import { getVendor} from '../../api/index';
import NavPage from '../Navbar/NavBar';
import './ViewVendor.css';
import Homefooter from '../footer/footer';

function ViewVendor(){
    const [vendorInfo, setVendorInfo] = useState({})
    const id = localStorage.getItem('inputname')
    console.log('This is View POrt'+id)

    const handleClick = (e) =>{
        e.preventDefault();
        window.location.href = '/home'
    }

    useEffect(() => {
        async function getdata() {
            const data = await getVendor(id);
            console.log(data);
            setVendorInfo(data);
        }
        getdata()
    }, [])

    return (
        <div className="View-vendor">
        <NavPage/>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div id="total_view_card" className="col col-md-6 ">
                            <h2 className='text-center'> View Vendor Details</h2>
                            <div id="view_card" className="card p-3 my-4">
                                <form>
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="Name" className="form-label">Company_ID</label>
                                            <input className="form-control" type="text" id="Name" value={vendorInfo.tid} disabled readonly/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Company Name</label>
                                            <input className="form-control" type="text"id="Company Name" value={vendorInfo.tname} disabled readonly/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Company Email</label>
                                            <input className="form-control" type="text" id="Company_Email" value={vendorInfo.temail} disabled readonly/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Contact Number</label>
                                            <input className="form-control" type="text" id="Contact Number" value={vendorInfo.Tcontactno} disabled readonly/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">GST Number</label>
                                            <input className="form-control" type="text" id="GSt_Number" value={vendorInfo.GSTNO} disabled readonly/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Address</label>
                                            <input className="form-control" type="text" id="Add"value={vendorInfo.tadd} disabled readonly/>
                                            <label htmlFor="" className="form-label">City</label>
                                            <input className="form-control" type="text" id="City" value={vendorInfo.tcity} disabled readonly/>
                                            <label htmlFor="" className="form-label">State</label>
                                            <input className="form-control" type="text" id="state"  value={vendorInfo.Tstate} disabled readonly/>
                                            <label htmlFor="Pin" className="form-label">PinCode</label>
                                            <input className="form-control" type="text" id="Pin" value={vendorInfo.Tpin} disabled readonly/>

                                        </div>
                                        {/* <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Upload Document</label>
                                    <input type="file" class="form-control" id="exampleInputPassword1" />
                                </div> */}
                                        <button id='link_supp' type="submit" onClick={handleClick} className="btn">Home</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Homefooter/>
            </div>
    )
}

export default ViewVendor