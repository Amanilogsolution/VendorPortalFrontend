import React, { useEffect, useState } from "react";
import NavPage from "../Navbar/NavBar";
import { LrData ,LrStatus,LRInsert} from '../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { AiFillEye } from "react-icons/ai";
import { FcDownload } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import FileSaver from 'file-saver';
import Homefooter from "../footer/footer";


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
    //     name: "Vendor Name",
    //     selector: "Transporter",
    //     sortable: true
    //   },
      {
        name: "Destination",
        selector: "City",
        sortable: true
      },
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
      name: "Current Status",
      sortable: false,
    
      selector: "null",
      cell: (row) => [
        <div className='droplist'>
         
        <select onChange={ (e) => {
          const status = e.target.value;
          localStorage.setItem('statusUpload',status)
        }}>
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
        name: "Action",
        sortable: false,
    
        selector: "null",
        cell: (row) => [
    
            <button className="editbtn btn-success" style={{marginLeft:"20px"}} onClick={async()=>{
                console.log(localStorage.getItem('statusUpload'),row.LRNo)
                const result = await LRInsert(row.GatePass,row.LRNo,localStorage.getItem('statusUpload'))
                console.log(result)
                if(result){
                    alert('Status Changed')
                    window.location.reload()
                }
                window.location.reload()
            }}>Update</button>
    
        ]
      }
  ];
  

const TotalLR = () => {
    const [data,setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [count , setCount] = useState();

    // const[lastpage,SetLastPage]= useState('')



    useEffect(()=>{
        const totalposts = async () => {
            const result = await LrData(localStorage.getItem("inputname"))
            console.log(result)
            setData(result.Result)
            setCount(result.Count[0].datacount)

            const statues = await LrStatus()
            console.log('status',statues)
           
        };
        totalposts()
    },[currentPage])

    
    const tableData= {
        columns, data
      }; 

    return(
        <div className="TotalLR">
          
         <NavPage/>
         <div className="container">
           
         <h1 className="text-dark mn-3">In Transit Details</h1>
         <p  style={{marginLeft:"40%"}}>Total In transit LR &nbsp; <b style={{fontSize:"25px"}}>{count}</b></p>

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
       <Homefooter/>
         </div>
    )
}

export default TotalLR
