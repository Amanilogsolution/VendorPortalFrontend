import React, { useState, useEffect } from "react";
import "./PendingInvoices.css";
import NavPage from "../Navbar/NavBar";
import {PendingInvoices} from '../../api/index';
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
    }
  ];
    
function Pendinginvoices() {
  
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    const fetchPosts = async () => {
      const cid = localStorage.getItem('inputname')
      console.log(cid)
      console.log(currentPage)
      const data = await PendingInvoices(cid)
      console.log(data.Count[0])
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
      <h1 className="text-dark mn-3">Pending Invoices</h1>
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
     <Homefooter/>
    </div>
  );
}

export default Pendinginvoices



