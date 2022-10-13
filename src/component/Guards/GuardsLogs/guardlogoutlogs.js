import React, { useEffect, useState } from "react";
import NavPage from "../../Navbar/NavBar";
import { GetguardmasterLogin, UpdateGuard } from '../../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

import Homefooter from "../../footer/footer";

const customStyles = {
  title: {
    style: {
      fontColor: 'red',
      fontWeight: '900',
    }
  },
  rows: {
    style: {
      minHeight: '55px'
    }
  },
  headCells: {
    style: {
      fontSize: '15px',
      fontWeight: '500',
      background:'rgb(253, 76, 27)',
      color:'white',
    },
  },
  cells: {
    style: {
      fontSize: '15px',
      background:'rgb(239, 225, 225)	',
      borderBottom:"1px solid silver",
    },
  },
};


const GuardsLogOut = () => {
  const [data, setData] = useState([]);
  const [sno, setSno] = useState()

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
          <input style={{width:"100%",background:"rgb(199, 171, 171)",borderRadius:"2px",border:"none"}} id={`date${row.ID}`} type="date" />
        </div>
      ]
    },
    {
      name: "Logout Time",
      sortable: false,
      selector: "null",
      cell: (row) => [
        <div className='droplist'>
          <input style={{width:"100%",background:"rgb(199, 171, 171)",borderRadius:"2px",border:"none"}} type="time" id={`time${row.ID}`} onChange={() => setSno(row.ID)} />
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

        <button style={{borderRadius:"1px",boxShadow:"1px 1px 1px 1px #252525",border:"none",fontSize:"13px",padding:"2px 6px"}} className="editbtn btn-secondary" onClick={handleClick}>Logout</button>

      ]
    }
  ];

  const handleClick = async (e) => {
    const date = document.getElementById(`date${sno}`).value
    const time = document.getElementById(`time${sno}`).value
    const status = 'Logout'
    const locationname = document.getElementById(`location${sno}`).innerHTML
    var [locationName, locationId] = locationname.split(" ")
    const Guardname = document.getElementById(`guardname${sno}`).innerHTML
    const guardid = document.getElementById(`guardId${sno}`).innerHTML


    const InsertGuardLogs = await UpdateGuard(locationId, Guardname, date, time, status, guardid, localStorage.getItem('inputPassword'), locationName)
    if (InsertGuardLogs) {
      window.location.reload();
    } else {
      alert('Invalid Entry')
    }



  }



  useEffect(() => {
    const totalposts = async () => {
      const result = await GetguardmasterLogin()
      console.log(result)
      setData(result)
      for (var i = 0; i <= result.length - 1; i++) {
        console.log(result[i].Logindate)
        document.getElementById(`date${result[i].ID}`).value = result[i].date

      }

    };
    totalposts()
  }, [])


  const tableData = {
    columns, data
  };

  return (
    <>
      <NavPage />
      <div className="Total_Glogs">


        <div className="container">

          <h1>Guards LogOut</h1>
          <h2 className="mt-5">Guards Logout</h2>

          <div className="DataTable">
            <DataTableExtensions {...tableData} >
              <Datatable
                columns={columns}
                data={data}
                pagination
                customStyles={customStyles}
              />
            </DataTableExtensions>
          </div>
        </div>
        <br />

      </div>
      <Homefooter />
    </>
  )
}

export default GuardsLogOut
