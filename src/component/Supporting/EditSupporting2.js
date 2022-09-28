import React, { useEffect, useRef, useState } from 'react';
import NavPage from '../Navbar/NavBar';
import { SupportingEdit } from '../../api';
import { UpdateSupportingDocument } from '../../api';
import { DeleteSupportingDocument } from '../../api';
import { DeleteBlobData } from '../../api';
import { UploadData } from '../../api';
import Homefooter from '../footer/footer';




const EditSupportings = () => {
    const [Referanceno,setReferanceNo]=useState({});
    const hiddenFileInput = useRef(null);
    const [sno,setSNo] = useState('');

   

    useEffect(()=>{
        const getSupporting = async () => {
            const data = localStorage.getItem('Supportno')
            console.log(data)
           const result = await SupportingEdit(data)
           console.log(result[0])
           setReferanceNo(result[0])
        }
        getSupporting()
    },[])

    const handleChangedata = async(event) =>{
        console.log("hello")
        const document = event.target.files[0]
        console.log(sno)
        console.log(document)
        const data = new FormData();
            data.append("images",document);
      const result =  await UploadData(data)
      console.log(result)
      const results = await UpdateSupportingDocument(sno,result)
      console.log(results)
    }


   

    return(
        <div className="EditSupporting-page">
        <NavPage/>
        <div className="row d-flex justify-content-center align-items-center" >
                        <div className="col col-md-6 ">
                            <h2>Edit Supporting</h2>

                            <div className="card p-3 my-5">
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <label htmlFor="Reference_no" className="form-label">Referance Number</label>
                                            <input className="form-control" type="text" value={Referanceno.Reference_Number} id="Reference_no"/>
                                            <img width="20%" src={Referanceno.Upload_Document}/>
                                        </div>
                                        <button className="btn btn-primary" onClick={async(e)=> 
                                        {
                                            e.preventDefault()
                                            await DeleteSupportingDocument(Referanceno.Sno);
                                          const result =await DeleteBlobData(Referanceno.Upload_Document); 
                                          window.location.href='/Supporting'
                                        }}>
                                          Delete
                                          </button>                                       
                                           &nbsp;
                                            &nbsp;

                                            <input type="file" ref={hiddenFileInput} onChange={handleChangedata} style={{display:'none'}}/>

                                      <button className="btn btn-primary" onClick={async()=>{
                                                      hiddenFileInput.current.click(); 
                                       const result =await DeleteBlobData(Referanceno.Upload_Document); 
                                       console.log(result)
                                       setSNo(Referanceno.Sno)
                                          }}>
                                            ReUpload
                                            </button>
                                            &nbsp;
                                            &nbsp;

                                            <button className="btn btn-danger" onClick={(e)=>{
                                                e.preventDefault()
                                                  window.location.href='/Supporting'
                                          }}>
                                            Cancel
                                            </button>         
                                         </div>
                            </div>
                        </div>
                    </div>
                    <Homefooter/>
              </div>
 )
}
export default EditSupportings