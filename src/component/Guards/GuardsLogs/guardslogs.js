import React, { useEffect, useState } from "react";
import NavPage from "../../Navbar/NavBar";
import { GetguardmasterLogout ,InsertGuardLogin} from '../../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import Homefooter from "../../footer/footer";

const GuardsLogs = () => {
    const [data,setData] = useState([]);
    const [sno,setSno] = useState()

    const columns = [
        {
          name: "Location",
        //   selector: "Location",
          sortable: true,
          cell: (row) => [
            <p id={`location${row.ID}`} >{row.locationname} {row.Location}</p>
          ]
        },
        {
          name: "Guard Name",
          selector: "Guardname",
          sortable: true,
          cell: (row) => [
            <p id={`guardname${row.ID}`} >{row.Guardname}</p>
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
            name: "Login Date",
            sortable: false,
            selector: "null",
            cell: (row) => [
              <div className='droplist'>
               <input id={`date${row.ID}`} type="date"  />
            </div>
            ]
          },
          {
            name: "Login Time",
            sortable: false,
            selector: "null",
            cell: (row) => [
              <div className='droplist'>
               <input type="time"  id={`time${row.ID}`}  onChange={()=> setSno(row.ID)}/>
            </div>
            ]
          },
          {
            name: "Status",
            selector: "Guard_status",
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
          //         <option value={row.Guard_status} hidden> {row.Guard_status}</option>
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
        
                <button className="editbtn btn-success" style={{marginLeft:"20px"}} onClick={handleClick}>Login</button>
        
            ]
          }
      ];
    
      const handleClick  = async (e)=> {
        const date = document.getElementById(`date${sno}`).value
        const time = document.getElementById(`time${sno}`).value
        const status = 'Login'
        const locationname = document.getElementById(`location${sno}`).innerHTML
        var [locationName,locationId] =  locationname.split(" ")
        console.log(locationId)
        const Guardname = document.getElementById(`guardname${sno}`).innerHTML
        const guardid = document.getElementById(`guardId${sno}`).innerHTML
  
        console.log(locationId,Guardname,date,time,status,guardid,locationName)


        const InsertGuardLogs = await InsertGuardLogin(locationId,Guardname,date,time,status,guardid,localStorage.getItem('inputPassword'),locationName)
        if(InsertGuardLogs){
            window.location.reload();
        }else{
            alert('Something went Wrong')
        }

      }



    useEffect(()=>{
        const totalposts = async () => {
            const result = await GetguardmasterLogout()
            console.log(result)
            setData(result) 
            
          
          setTimeout(() => {
            for(var i=0;i<=result.length-1;i++){
            
            var myDate = new Date();
            var day = myDate.getDate();
            var month = myDate.getMonth() + 1;
            var year = myDate.getFullYear();
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;
            document.getElementById(`date${result[i].ID}`).value = year + "-" + month + "-" + day;
            }
          },1000)
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
           
         <h1 className="text-dark mn-3">Guards LogIn</h1>

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

export default GuardsLogs
