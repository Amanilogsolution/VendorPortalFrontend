import React, { useEffect, useState } from 'react';
import {Updatevendor} from '../../api/index';
import NavPage from '../Navbar/NavBar';
import './UpdateVendor.css'
import { getVendor} from '../../api/index';
import {UploadData} from '../../api/index';
import Homefooter from '../footer/footer';



function UpdateVendor() {
    const [vendorInfo, setVendorInfo] = useState({})
    const [file,setFile] = useState('')

    // const [images, Updateimages] = useState("")

    const id = localStorage.getItem('inputname')
    console.log('This is View POrt'+id)

    const handleInputChange = (e) => {
        let obj = {}
        obj[e.target.name] = e.target.value;
        setVendorInfo({ ...vendorInfo, ...obj })
    }

    const handleSendFile =()=>{
        console.log(file)
        const data = new FormData();
        data.append("images",file)
        UploadData(data)
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tname = document.getElementById('CName').value
        const temail = document.getElementById('Cemail').value
        const Tcontactno = document.getElementById('CNo').value
        const tadd = document.getElementById('address').value
        const tcity = document.getElementById('City').value
        const Tstate = document.getElementById('WState').value
        const Tpin = document.getElementById('Pin').value
        const data = await Updatevendor(localStorage.getItem('inputname'), tname, temail, Tcontactno, tadd , tcity ,Tstate, Tpin)
        console.log(data)
        alert("Data Updated")
        window.location.href='/home'
    }

const handleChangeemail = (e) => {
        setVendorInfo({...vendorInfo,temail: e.target.value})
    }
const handleChangenumber = (e) => {
        setVendorInfo({...vendorInfo,Tcontactno: e.target.value})
    }
const handleChangeadd = (e) => {
    setVendorInfo({...vendorInfo, tadd: e.target.value})
}
const handleChangecity = (e) => {
    setVendorInfo({...vendorInfo, tcity: e.target.value})
}
const handleChangestate = (e) => {
    setVendorInfo({...vendorInfo, Tstate: e.target.value})
}
const handleChangepin = (e) => {
    setVendorInfo({...vendorInfo, Tpin: e.target.value})
}
    useEffect(() => {
        async function getdata() {
            const data = await getVendor(id);
            console.log(data);
            setVendorInfo(data || '');
        }
        getdata()
    }, [])

    return (
        <div>
            <NavPage/>
        <div className="page Upage-vonder">
            {/* {JSON.stringify(vendorInfo)} */}

            <div className="">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col col-md-6 ">
                            <h2> Update Vendor Details</h2>
                            <div className="card p-3 my-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Company_ID</label>
                                            <input class="form-control" type="text" id="C_ID" value={vendorInfo.tid} disabled readonly/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Company Name</label>
                                            {/* <input type="text" className="form-control" id="CName" aria-describedby="emailHelp" value={vendorInfo.tname} /> */}
                                            <input class="form-control" type="text" id="CName" value={vendorInfo.tname} disabled readonly/>

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Company Email</label>
                                            <input type="email" className="form-control" id="Cemail" aria-describedby="emailHelp" value={vendorInfo.temail} onChange={(e) => handleChangeemail(e)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Contact Number</label>
                                            <input type="number" className="form-control" id="CNo" aria-describedby="emailHelp" value={vendorInfo.Tcontactno} onChange={(e) => handleChangenumber(e)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" value={vendorInfo.tadd} onChange={(e) => handleChangeadd(e)} />
                                            <label htmlFor="" className="form-label">City</label>
                                            <input type="text" className="form-control" id="City" value={vendorInfo.tcity} onChange={(e) => handleChangecity(e)} />
                                            <label htmlFor="" className="form-label">State</label>
                                            <input type="text" className="form-control" id="WState" value={vendorInfo.Tstate} onChange={(e) => handleChangestate(e)} />
                                            <label htmlFor="" className="form-label">PinCode</label>
                                            <input type="number" className="form-control" id="Pin" value={vendorInfo.Tpin} onChange={(e) => handleChangepin(e)} />
                                        </div>
                                        <div class="input-group">
                                    <input type="file" class="form-control" id="exampleInputPassword1"  onChange={event=>{ const file = event.target.files[0];
                                                                                                            setFile(file)}}/>
                                  <div class="input-group-append">
                                  <button class="btn btn-outline-secondary" onClick={handleSendFile} type="button">Upload</button>
                                    </div>
                                      </div>
                                            <br/>
                                        <button type="submit" className="btn btn-primary">Update Data</button>
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

export default UpdateVendor