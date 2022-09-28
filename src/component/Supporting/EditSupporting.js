import React, { useEffect, useRef, useState } from 'react';
import NavPage from '../Navbar/NavBar';
import { ViewSupportingData } from '../../api';
import { UpdateSupportingDocument } from '../../api';
import { DeleteSupportingDocument } from '../../api';
import { DeleteBlobData } from '../../api';
import ReactPaginate from 'react-paginate';
import { UploadData } from '../../api';

const EditSupporting = () => {
    const [viewSupporting,setViewSupporting] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [lastpage,SetLastPage] = useState('');

    const hiddenFileInput = useRef(null);

    const [sno,setSNo] = useState('')
    const [updateUrl,setUpdateUrl] = useState('')


    useEffect(()=>{
        const getSupporting = async () => {
        const result = await ViewSupportingData(currentPage)
        console.log(result.data)
        setViewSupporting(result.data)
        console.log(result.count[0]["total_row"])
        const TotalDats = result.count[0]["total_row"]
        SetLastPage(Math.ceil(TotalDats/10))
        }
        getSupporting()
    },[currentPage])

    const handlePageClick = (data) => {
        setCurrentPage(data.selected +1)
    }

    const handleChange = async(event) =>{
        const document = event.target.files[0]
        // if(!document){         
        //        alert("Please Upload Document")
        //             }else{
            const data = new FormData();
            data.append("images",document);
           const result =  await UploadData(data)
           console.log(result)
           setUpdateUrl(result)

             const results = await UpdateSupportingDocument(sno,updateUrl)
             console.log(results)
           

            // alert("Documents Uploaded")
            // window.location.reload()
        // } 
    }

    return(
        <div className="EditSupporting-page">
        <NavPage/>
        <div className="container" >
        <div className='row'>
                            {
                                viewSupporting.map((datas)=>(
                                    <div className="col-md-4 col-12 mt-3 mx-auto" style={{textAlign: "center"}}>
                                    <iframe className="embed-responsive-item" scrolling="no" height="200px" width="300"  src={`${datas.Upload_Document}`} alt="Card image cap"></iframe>
                                    <div className="card-body d-flex justify-content-between">
                                      <button className="btn btn-primary" onClick={async()=> 
                                        {await DeleteSupportingDocument(`${datas.Sno}`);
                                          const result =await DeleteBlobData(`${datas.Upload_Document}`); 
                                             setTimeout(()=>{
                                            window.location.reload()
                                             },8000)
                                               console.log(result)
                                        }}>
                                          Delete
                                          </button>

                                      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display:'none'}}/>
                                      <button className="btn btn-primary" onClick={async()=>{
                                       const result =await DeleteBlobData(`${datas.Upload_Document}`); 
                                       console.log(result)
                                       setSNo(`${datas.Sno}`)
                                          hiddenFileInput.current.click(); 
                                          }}>
                                            ReUpload
                                            </button>
                                    </div>
                                  </div>   
                            )
                            )
                            }
           </div>
           <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={lastpage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </div>
     </div>
             )
}
export default EditSupporting