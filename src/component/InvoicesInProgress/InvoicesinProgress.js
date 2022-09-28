import React, { useState, useEffect } from "react";
import "./InvoicesinProgress.css";
import NavPage from "../Navbar/NavBar";
import {InvoicesOffset} from '../../api/index';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Homefooter from "../footer/footer";





const columns = [
  {
    name: "Date",
    selector: "INV_DATE",
    sortable: true
  },
  {
    name: "Invoice No",
    selector: "INV_NO",
    sortable: true
  },
    {
      name: "Invoice Amount",
      selector: "INV_AMT",
      sortable: true
    },  {
        name: "TDS Amount",
        selector: "tds_amt",
        sortable: true
      }
  ];
    
function Invoices() {
  
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 



  useEffect(() => {
    const fetchPosts = async () => {
      const cid = localStorage.getItem('inputname')
      console.log(cid)
      const data = await InvoicesOffset(cid)
      console.log(data.data)
       setData(data.data);
    };
    fetchPosts();
  }, [currentPage]);
  const tableData= {
    columns, data
  };




  return (
    <div className="InvoicesinProgress">
     <NavPage/>
    <div className="container">
      <h1 className="text-dark mn-3">Paid Invoices</h1>
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
  );
}

export default Invoices



