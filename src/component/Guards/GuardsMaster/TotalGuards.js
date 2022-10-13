import React, { useEffect, useState } from "react";
import NavPage from "../../Navbar/NavBar";
import { TotalGuard, DeactiveGuards, LRInsert } from '../../../api';
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
        <select style={{width:"100%",background:"rgb(199, 171, 171)",borderRadius:"2px",border:"none",color:"black"}} onChange={async (e) => {
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
  const [data, setData] = useState([]);





  useEffect(() => {
    const totalposts = async () => {
      const result = await TotalGuard()
      console.log(result)
      setData(result)
    };
    totalposts()
  }, [])


  const tableData = {
    columns, data
  };

  return (
    <>
      <div className="Total_Glogs">

        <NavPage />
        <div className="container">

          <h1>A</h1>
          <h2 className="text-dark mt-5">TotalGuards</h2>

          <button type="button" style={{ float: "right" }} onClick={() => { window.location.href = "./InsertGuard" }} class="btn btn-secondary">Add Guard</button>

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

export default TotalGuards
