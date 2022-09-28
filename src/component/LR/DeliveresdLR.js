import React, { useEffect, useState } from "react";
import NavPage from "../Navbar/NavBar";
import { LRDeliveredData ,LRDeliverUpdate,UploadData,LRUpload} from '../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { AiFillEye } from "react-icons/ai";
import { FcDownload } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import FileSaver from 'file-saver';
import Homefooter from "../footer/footer";
import './Lr.css'


const columns = [
    {
      name: "AWL LR",
      selector: "LRNo",
      sortable: true
    },
    {
      name: "AWL LR Date",
      selector: "OutLRDate",
      sortable: true
    },
        // {
        //   name: "OutGPNo",
        //   selector: "OutGPNo",
        //   sortable: true
        // },
    // {
    //     name: "Vendor Name",
    //     selector: "Transporter",
    //     sortable: true
    //   },
    //   {
    //     name: "City",
    //     selector: "City",
    //     sortable: true
    //   },
    //   {
    //     name: "OutVehType",
    //     selector: "OutVehType",
    //     sortable: true
    //   },
    //   {
    //     name: "OutVehNo",
    //     selector: "OchangecssPAllow",
    //     sortable: true
    //   },
    //   {
    //     name: "OutDriverNo",
    //     selector: "OutDriverNo",
    //     sortable: true
    //   },
      {
        name: "Vendor Docket",
        selector: "DocketNo",
        sortable: true
      },
    {
      name: "Last Status",
      selector: "ShipmentStatus",
      sortable: true
    },
    {
        name: "Delivery Date",
        sortable: false,
        selector: "null",
        cell: (row) => [
          <div className='droplist'>
           <input type="date"  
           value={row.StatusDate}
           onChange={(e)=>{localStorage.setItem("Status_Date",e.target.value)}}
           />
        </div>
        ]
      },
    {
      name: "Change Status",
      sortable: false,
      selector: "null",
      cell: (row) => [
        <div className='droplist'>
        <select onChange={ (e) => {
          const status = e.target.value;
          localStorage.setItem('statusUpload',status)
        }} >
            <option selected disabled hidden>Select</option>
          <option value='Pending For Pickup'>Pending For Pickup</option>
          <option value='In-Transit' >In-Transit</option>
          <option value='Out For Delivery' >Out For Delivery</option>
          <option value='Delivered'>Delivered</option>
          <option value='Hold at WH' >Hold at WH</option>
          <option value='Not Delivered' >Not Delivered</option>
          <option value='Return' >Return</option>
          <option value='Hold at Hub' >Hold at Hub</option>
          <option value='Cancelled' >Cancelled</option>
        </select>
      </div>
      ]
    },
    {
        name: "Action and Upload",
        sortable: false,
        selector: "null",
        cell: (row) => [
             <div style={{display:"flex"}}>
            <button className="editbtn btn-success" style={{width:"80px"}}  onClick={async()=>{
                const result = await LRDeliverUpdate(row.GatePass,row.LRNo,localStorage.getItem('statusUpload'),localStorage.getItem('Status_Date'))
                if(result){
                  localStorage.removeItem("statusUpload")
                    alert('Updated')
                    window.location.reload()
                }
                console.log(result)
            }}>Update</button>
            <button className="editbtn btn-success"  style={{marginLeft:"7px",width:"80px"}} onClick={(e)=>{
                e.preventDefault();
                document.getElementById('exampleModal').style.display = 'block';
                localStorage.setItem('OutLRNo',row.LRNo)
            }}>Upload</button>
            </div>
    
        ]
      }
  ];
  

const DeliveresdLR = () => {
    const [file,setFile] = useState('')
    const [data,setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [count , setCount] = useState();
    // const[lastpage,SetLastPage]= useState('')



    useEffect(()=>{
        const totalposts = async () => {
            const result = await LRDeliveredData(localStorage.getItem("inputname"))
            console.log(result.Count[0])
            setData(result.Result)
            setCount(result.Count[0].datacount)
            localStorage.removeItem('statusUpload')

         
           
            // const totalData= result.Count[0]['total_row']
            // SetLastPage(Math.ceil(totalData/10))
        };
        totalposts()
    },[currentPage])

    

    const tableData= {
        columns, data
      }; 
      const UploadedDate = async(UploadLink)=>{
        console.log(UploadLink)
         const Upload = await LRUpload(localStorage.getItem('OutLRNo'),UploadLink)
         if(Upload){
           alert('Upload')
           window.location.href = '/Delivered'
         }
         else{
           alert('Server not Respond')
         }
         console.log(Upload)

      }
      const handleClickUpload = async(e) => {
        e.preventDefault()
        const data = new FormData();
        data.append("images",file)
       const UploadLink = await UploadData(data)
       console.log(UploadLink)
       if(UploadLink){
        UploadedDate(UploadLink)
       }
       
    }

    return(
        <div className="TotalInvoices">
         <NavPage/>
         <div className="container">
         <h1 className="text-dark mn-3">Delivered</h1>
         <p  style={{marginLeft:"40%"}}>Total DeliveredLR &nbsp; <b style={{fontSize:"25px"}}>{count}</b></p>
         {/* <button type="button" style={{ float: "right"}} onClick={()=>{window.location.href="./AddInvoices"}} class="btn btn-primary">Add Invoice</button> */}
       
         <div className="DataTable">
        <DataTableExtensions {...tableData} >
        <Datatable 
        columns={columns} 
        data={data}
        pagination
        
        />
       </DataTableExtensions>
       </div>        
       </div>
       <br/>
     
 <div
              className="modalbox"
              id="exampleModal">
       <div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        Import excel file
      </h5>
      {/* <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button> */}
    </div>
    <div className="modal-body">
      
      <div className=" ">
        <label
          htmlFor="user_name"
          className=" col-form-label font-weight-normal"
        >
          <span >Select the file</span>
        </label>
        <div className=" ">
        <input className="form-control" type="file" id="Upload_Document" onChange={event=>{ const document = event.target.files[0];
                                                                                                            setFile(document)}} />
        </div><br/>
      <span style={{color:"red"}}>
         {/* <a href={Excelfile} download> Download formate</a> */}
      </span><br/>
      </div>
    </div>
    <div className="modal-footer">
    <button
        type="button"
        className="btn btn-secondary"
         onClick={()=>
           document.getElementById("exampleModal").style.display="none"}
      >
        Close
      </button>
      <button type="button" className="btn btn-primary" 
      onClick={handleClickUpload}  >
        Upload
      </button>
    </div>
  </div>
</div>
</div>



<Homefooter/>


         </div>
    )
}

export default DeliveresdLR
