import React, { useEffect, useState } from "react";
import NavPage from "../../Navbar/NavBar";
import { GetguardmasterLogin ,UpdateGuard} from '../../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import Homefooter from "../../footer/footer";

const GuardsLogOut = () => {
    const [data,setData] = useState([]);
    const [sno,setSno] = useState()

    const columns = [
        {
          name: "Location",
        //   selector: "Location",
          sortable: true,
          cell: (row) => [
            <p id={`location${row.ID}`} >{row.locationname} {row.whid} </p>
          ]
        },
        {
          name: "Guard Name",
          selector: "Guardname",
          sortable: true,
          cell: (row) => [
            <p id={`guardname${row.ID}`} >{row.guardname}</p>
          ]
        },
        {
            name: "Guard ID",
            selector: "Guardid",
            sortable: true,
            cell: (row) => [
              <p id={`guardId${row.ID}`} >{row.Guardid}</p>
            ]
          },
           
        {
            name: "Logout Date",
            sortable: false,
            selector: "null",
            cell: (row) => [
              <div className='droplist'>
               <input id={`date${row.ID}`} type="date"  />
            </div>
            ]
          },
          {
            name: "Logout Time",
            sortable: false,
            selector: "null",
            cell: (row) => [
              <div className='droplist'>
               <input type="time"  id={`time${row.ID}`} onChange={()=>  setSno(row.ID)} />
            </div>
            ]
          },
          {
            name: "Status",
            selector: "Status",
            sortable: true,
            // cell: (row) => [
            //   <p id={`guardname${row.ID}`} >{row.Guardname}</p>
            // ]
          },
         
          // {
          //   name: 'Status',
          //   sortable: true,
          //   selector: 'null',
          //   cell: (row) => [
          //     <div className='droplist'>
          //       <select id={`status${row.ID}`} onChange={async (e) => {
          //         const status = e.target.value;
          //       //   window.location.href = 'TotalGuards'
          //       // alert(row.ID)
          //       }
          //       }>
          //         <option value={row.Status} hidden> {row.Status}</option>
          //         <option value='Login'>Login</option>
          //         <option value='Logout' >Logout</option>
          //       </select>
          //     </div>
          //   ]
          // },
    
        {
            name: "Action",
            sortable: false,
        
            selector: "null",
            cell: (row) => [
        
                <button className="editbtn btn-success" style={{marginLeft:"20px"}} onClick={handleClick}>Logout</button>
        
            ]
          }
      ];
    
      const handleClick  = async (e)=> {
        const date = document.getElementById(`date${sno}`).value
        const time = document.getElementById(`time${sno}`).value
        const status = 'Logout'
        const locationname = document.getElementById(`location${sno}`).innerHTML
        var [locationName,locationId] =  locationname.split(" ")
        const Guardname = document.getElementById(`guardname${sno}`).innerHTML
        const guardid = document.getElementById(`guardId${sno}`).innerHTML


        const InsertGuardLogs = await UpdateGuard(locationId,Guardname,date,time,status,guardid,localStorage.getItem('inputPassword'),locationName)
        if(InsertGuardLogs){
            window.location.reload();
        }else{
            alert('Invalid Entry')
        }



      }



    useEffect(()=>{
        const totalposts = async () => {
            const result = await GetguardmasterLogin()
            console.log(result)
            setData(result) 
            for(var i=0;i<=result.length-1;i++){
              console.log(result[i].Logindate)
              document.getElementById(`date${result[i].ID}`).value = result[i].date

            } 

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
           
         <h1 className="text-dark mn-3">Guards LogOut</h1>

         {/* <button type="button" style={{ float: "right"}} onClick={()=>{window.location.href="./InsertGuard"}} class="btn btn-primary">Add Guard</button> */}
       
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

export default GuardsLogOut
