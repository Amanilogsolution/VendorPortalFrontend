import React, { useEffect, useState } from 'react';
import NavPage from '../../Navbar/NavBar';
import Homefooter from '../../footer/footer';
import { insertguard, ActiveLocation } from '../../../api/index'


const InsertGuard = () => {
    const [location, setLocation] = useState([])
    const [number, setNumber] = useState()
    const [shift,setShift] = useState()

    useEffect(async () => {
        const result = await ActiveLocation()
        setLocation(result)

        var myDate = new Date();
        var day = myDate.getDate();
        var month = myDate.getMonth() + 1;
        var year = myDate.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        document.getElementById('guardjoindate').value = year + "-" + month + "-" + day;

    }, [])

    const handleChange = (e) => {
        if (e.target.value.length > 10) return false
        setNumber(e.target.value)
    }

    const handleChangestatus = (e) => {
        let data = e.target.value
        setShift(data)
        console.log(data)
      }

    const handleClick = async (e) => {
        e.preventDefault();
        const Location = document.getElementById('location').value
        let LocationName = document.getElementById('location')
        LocationName = LocationName.options[LocationName.selectedIndex].text;

        const Guardname = document.getElementById('guardname').value
        const Guardid = 'Guard' + Location + Math.floor(1000 + Math.random() * 9000)
        const Phoneno = document.getElementById('phoneno').value
        const vendorid = document.getElementById('vendid').value
        const vendorname = document.getElementById('vendname').value
        const Guardjoiningdate = document.getElementById('guardjoindate').value
        const dateofbirth = document.getElementById('dateofbirth').value

        console.log(Location, Guardname, Guardid, Phoneno, vendorid, vendorname, Guardjoiningdate,LocationName,dateofbirth,shift)

        const result = await insertguard(Location, Guardname, Guardid, Phoneno, vendorid, vendorname, Guardjoiningdate,LocationName,dateofbirth,shift)
        if (result == 'Added') {
            alert('Guard Added')
            window.location.href = '/TotalGuards'
        } else {
            alert('Invalid Entry')
        }
        console.log(result)



    }

    return (
        <>
        <NavPage />
        <div className="Total_Glogs">
            
            <div className="row d-flex justify-content-center align-items-center" style={{width:"100%"}}>
                <div className="col col-md-6">
                    <h2>Add Guard</h2>
                    <h2 className='text-center mt-5'>Add Guard</h2>
                    <div className="card p-3 my-3 mb-5">
                        <form>

                            <div className=' row ' style={{marginBottom:"6px"}} >

                                <div className="form-group col-md-6"  style={{marginBottom:"-1px"}}>
                                    <label htmlFor="Invoice_Amount">Vendor ID <span style={{ color: "red" }}>*</span></label>
                                    <input className="form-control" type="text" id="vendid" disabled value={localStorage.getItem('inputname')} />
                                </div>
                                <div className="form-group col-md-6" style={{marginBottom:"-1px"}} >
                                    <label htmlFor="Invoice_Amount">Vendor Name <span style={{ color: "red" }}>*</span></label>
                                    <input className="form-control" type="text" id="vendname" disabled value={localStorage.getItem('cust_name')} />
                                </div>

                            </div>

                            <div className="mb-1">
                                <div className="form-group" style={{marginBottom:"5px"}}>
                                    <label htmlFor="Reference_no" className="form-label">Location <span style={{ color: "red" }}>*</span></label>
                                    <div className="mb-3">
                                        <select className="form-select w-100 p-2" id="location">
                                            <option selected value="" hidden>Select Location</option>
                                            {
                                                location.map(items => (
                                                    <option value={items.WHid} >{items.WHname}</option>

                                                ))
                                            }
                                            {/* <option value="Other">Other</option> */}
                                        </select>
                                    </div>
                                </div>
                                <div className='row' style={{marginBottom:"0px"}}>

                                    <div className="form-group col-md-6" style={{marginBottom:"0px"}}>
                                        <label htmlFor="Invoice_Amount">Guard Name <span style={{ color: "red" }}>*</span></label>
                                        <input className="form-control" type="text" id="guardname" />
                                    </div>
                                    <div className="form-group col-md-6" style={{marginBottom:"0px"}}>
                                        <label htmlFor="Invoice_Amount">Phone No <span style={{ color: "red" }}>*</span></label>
                                        <input className="form-control" type="number" id="phoneno" onChange={handleChange} value={number} />
                                    </div>
                                </div>

                                {/* <div className="mb-3">
                                    <label htmlFor="Invoice_Amount" className="form-label">Vendor ID <span style={{ color: "red" }}>*</span></label>
                                    <input className="form-control" type="text" id="vendid" disabled value={localStorage.getItem('inputname')} />
                                </div> */}




                                <div className='row' style={{paddingBottom:"-2px"}}>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="Invoice_Amount">Date Of Birth <span style={{ color: "red", }}>*</span></label>
                                        <input className="form-control" type="date" id="dateofbirth" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label htmlFor="Invoice_Amount">Guard Joining Date <span style={{ color: "red" }}>*</span></label>
                                        <input className="form-control" type="date" id="guardjoindate" />
                                    </div>
                                </div>
                                <div className="mb-3"onChange={handleChangestatus} >
                                    {/* <div className="form-label"> */}
                                    <label
                                        htmlFor="user_name"
                                        className="col-md-2 col-form-label font-weight-normal"
                                    >
                                        Select Shift <span style={{ color: "red" }}>*</span>
                                    </label>

                                    <label className="form-check form-check-inline ">
                                        <input
                                            className="form-check-input" type="radio"
                                            name="taxpreference"
                                            value="Day"
                                        />Day
                                    </label>

                                    <label className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="taxpreference"
                                            value="Night"
                                        />Night

                                    </label>
                                    {/* </div> */}
                                </div>




                                <div className='my-3'>
                                    <button type='reset' id="link_supp" className="btn" value='reset'>Reset </button>
                                    <button style={{ marginLeft: '20px' }} className="btn btn-secondary" onClick={(e) => {
                                        e.preventDefault()
                                        window.location.href = '/TotalGuards'
                                    }}>
                                        Cancel
                                    </button>
                                    <button id="add_btn" type="submit" style={{ marginLeft: '20px' }} className="btn" onClick={handleClick}>Save</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            

        </div>
        <Homefooter />
        </>
    )
}

export default InsertGuard
