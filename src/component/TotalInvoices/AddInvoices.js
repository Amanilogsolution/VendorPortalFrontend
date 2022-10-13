import React, { useEffect, useState } from 'react';
import NavPage from '../Navbar/NavBar';
import { UploadData } from '../../api';
import { InsertInvoicesData } from '../../api';
import { ShowSupporting } from '../../api';
import Select from 'react-select';
import './AddInvoices.css'
import { UpdateInvoiceSupporting } from '../../api';
import Homefooter from '../footer/footer';



const AddInvoices = () => {
    const [file, setFile] = useState('')
    const [documents, setDocument] = useState('')
    const [Coverletter, setCoverLetter] = useState('')
    const [supportingData, setSuportingData] = useState([])
    const [supportingselect, setSupportingSelect] = useState([])
    const [show, setShow] = useState(false)

    let option = supportingData.map((ele) => {
        return { value: ele.Reference_Number, label: ele.Reference_Number };
    })

    useEffect(() => {
        const data = async () => {
            const result = await ShowSupporting()
            setSuportingData(result)
            console.log(result)
        }
        data()
    }, [])

    const handleClick = async (e) => {
        e.preventDefault();
        const Invoice_no = document.getElementById('Invoice_no').value
        const Invoice_Amount = document.getElementById('Invoice_Amount').value
        if (Invoice_no === '' || Invoice_Amount === '' || file === '') {
            alert('Please Fill All Fields')
        }
        else {
            supportingselect.forEach(async (datas) => {
                const ReferanceNo = datas.value
                console.log(datas.value)

                await UpdateInvoiceSupporting(Invoice_no, ReferanceNo)
            })

            const result = await InsertInvoicesData(Invoice_no, Invoice_Amount, documents, Coverletter)
            if (result) {
                alert("Added")
                window.location.href = '/TotalInvoices'
            }
        }
    }

    const handleClickUpload = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("images", file)
        const result = await UploadData(data)
        setDocument(result)
        console.log(result)
    }



    const handleChange = (value) => {
        setSupportingSelect(value)
    }
    console.log(supportingselect)
    const handleCoverUpload = async (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("images", file)
        const result = await UploadData(data)
        setCoverLetter(result)
        console.log(result)
    }

    const handleClickShow = () => {
        setShow(!show)
    }
    return (
        <>
            <NavPage />
            <div className="Add-invoice-page">

                <div className="row d-flex justify-content-center align-items-center" >
                    <div className="col col-md-6 ">
                        <h2 className='add_Supp'>Add Invoice</h2>
                        <div id="card_main_div" className="card p-3 my-5">
                            <form >
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label htmlFor="Reference_no" className="form-label">Invoice Number <span style={{ color: "red" }}>*</span></label>
                                        <input className="form-control" type="text" id="Invoice_no" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Invoice_Amount" className="form-label">Invoice Amount <span style={{ color: "red" }}>*</span></label>
                                        <input className="form-control" type="text" id="Invoice_Amount" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Upload_Date" className="form-label">Upload Invoice <span style={{ color: "red" }}>*</span></label>
                                        <div class="input-group">
                                            <input className="form-control" type="file" id="Upload_Document" onChange={event => {
                                                const document = event.target.files[0];
                                                setFile(document)
                                            }} />
                                            <div class="input-group-append">
                                                <button class="btn" style={{ zIndex: "0", background: "rgb(253, 76, 27)", color: "white" }} onClick={handleClickUpload} type="button">Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Upload_Date" className="form-label">Upload Cover Letter</label>
                                        <div class="input-group">
                                            <input className="form-control" type="file" id="Upload_Document" onChange={event => {
                                                const document = event.target.files[0];
                                                setFile(document)
                                            }} />
                                            <div class="input-group-append">
                                                <button class="btn" style={{ zIndex: "0", background: "rgb(253, 76, 27)", color: "white" }} onClick={handleCoverUpload} type="button">Upload</button>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='my-4'/>
                                    <button type="button" id="link_supp" className="btn mx-1" onClick={handleClickShow} >Link Supporting </button>
                                    <br />
                                    {show &&
                                        (<div className='select mt-3'>
                                            <label>Select Supporting document</label>
                                            <Select
                                                placeholder="Supportings Available"
                                                options={option}
                                                isMulti={true}
                                                onChange={handleChange} >
                                            </Select>
                                        </div>)
                                    }
                                </div>

                            </form>
                        </div>


                        <button type='reset' className="btn btn-secondary mb-5 mx-1" value='reset'>Reset </button>


                        <button className="btn btn-secondary mb-5 mx-1" onClick={(e) => {
                            e.preventDefault()
                            window.location.href = '/TotalInvoices'
                        }}>
                            Cancel
                        </button>
                        <button type="submit" id="add_btn" className="btn mb-5 mx-1" onClick={handleClick}>Save</button>

                        <div>
                        </div>
                    </div>

                </div>

            </div>
            <Homefooter />
        </>
    )
}

export default AddInvoices