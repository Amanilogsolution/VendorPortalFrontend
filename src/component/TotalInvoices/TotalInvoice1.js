import React, { useEffect, useState } from "react";
import NavPage from "../Navbar/NavBar";
import { GetInvoicesData } from '../../api';
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
      name: "Date",
      selector: "Invoice_Date",
      sortable: true
    },
    {
      name: "Invoice No",
      selector: "Invoice_Number",
      sortable: true
    },
    {
      name: "Invoice Amount",
      selector: "Invoice_Amount",
      sortable: true
    },
    {
      name: "Status",
      selector: "status",
      sortable: true
    },
    {
      name: "Action",
      sortable: false,
    
      selector: "null",
      cell: (row) => [
        <a
        style={{marginRight:"8px"}}
          key={row.title}
          href={row.Upload_Invoice}
          className="EyeView"
          target="_blank"
        > <AiFillEye fontSize="1.5em"/></a>,
        <a
        style={{cursor:"pointer",marginRight:"8px",width:"10px"}}
        onClick={()=> FileSaver.saveAs(`${row.Upload_Invoice}`,"Invoice")}
        ><FcDownload fontSize="1.3em"/></a>,
        <a     
        style={{cursor:"pointer",marginLeft:"8px"}}
         onClick={()=> {
          localStorage.setItem('Sno',`${row.SNo}`);
          if(!`${row.SNo}`){
              window.location.href="/EditInvoices"
          }
          else{
          window.location.href="/EditInvoicesDetails"
             }
         }}

        ><FiEdit fontSize="1.3em"/></a>
      ]
    }
  ];
  

const Totaldata = () => {
    const [data,setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const[lastpage,SetLastPage]= useState('')



    useEffect(()=>{
        const totalposts = async () => {
            const result = await GetInvoicesData()
            console.log(currentPage)
            setData(result.result)
            console.log(result)

            // const totalData= result.Count[0]['total_row']
            // SetLastPage(Math.ceil(totalData/10))
        }
            
        totalposts()
    },[currentPage])

    const handlePageClick = (data)=>{
      setCurrentPage(data.selected +1 )

    }

    const tableData= {
        columns, data
      }; 

  
   

    return(
        <div className="TotalInvoices">
         <NavPage/>
         <div className="container">
         <h1 className="text-dark mn-3">View Invoices</h1>
         <button type="button" style={{ float: "right"}} onClick={()=>{window.location.href="./AddInvoices"}} class="btn btn-primary">Add Invoice</button>
       
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

export default Totaldata
