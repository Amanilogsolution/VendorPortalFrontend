import React, { useEffect, useState } from "react";
import NavPage from "../../Navbar/NavBar";
import { TotalGuard ,DeactiveGuards,LRInsert} from '../../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import Homefooter from "../../footer/footer";


const columns = [
    {
      name: "Location",
      selector: "locationname",
      sortable: true
    },
    {
      name: "Guard Name",
      selector: "Guardname",
      sortable: true
    },
    
       
    {
        name: "Phone no",
        selector: "Phoneno",
        sortable: true
      },
      {
        name: "Vendor Name",
        selector: "Vendorname",
        sortable: true
      },
      {
        name: "Vendor Id",
        selector: "vendorid",
        sortable: true
      },
      {
        name: "Shift",
        selector: "Shift",
        sortable: true
      },
      {
        name: 'Status',
        sortable: true,
        selector: 'null',
        cell: (row) => [
          <div className='droplist'>
            <select onChange={async (e) => {
              const status = e.target.value;
              await DeactiveGuards(row.ID, status)
              window.location.href = 'TotalGuards'
            }
            }>
              <option value={row.Status} hidden> {row.Status}</option>
              <option value='Active'>Active</option>
              <option value='Deactive' >Deactive</option>
            </select>
          </div>
        ]
      }

    
  ];
  

const TotalGuards = () => {
    const [data,setData] = useState([]);
    




    useEffect(()=>{
        const totalposts = async () => {
            const result = await TotalGuard()
            console.log(result)
            setData(result)  
        };
        totalposts()
    },[])

    
    const tableData= {
        columns, data
      }; 

    return(
        <div className="TotalLR">
          
         <NavPage/>
         <div className="container">
           
         <h1 className="text-dark mn-3">TotalGuards</h1>

         <button type="button" style={{ float: "right"}} onClick={()=>{window.location.href="./InsertGuard"}} class="btn btn-primary">Add Guard</button>
       
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

export default TotalGuards
