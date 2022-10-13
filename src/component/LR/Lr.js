import React, { useEffect, useState } from "react";
import NavPage from "../Navbar/NavBar";
import { LrData, LrStatus, LRInsert } from '../../api';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { AiFillEye } from "react-icons/ai";
import { FcDownload } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import FileSaver from 'file-saver';
import Homefooter from "../footer/footer";
import { Border } from "react-bootstrap-icons";

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
      // fontWeight:'600',
      background:'rgb(239, 225, 225)	',
      borderBottom:"1px solid silver"
    },
  },
};


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

        <select style={{width:"100%",background:"rgb(250, 232, 297)",borderRadius:"3px"}} onChange={(e) => {
          const status = e.target.value;
          localStorage.setItem('statusUpload', status)
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

      <button className="editbtn btn-secondary" style={{ marginLeft: "20px",borderRadius:"5px",boxShadow:"1px 1px 2px 1px #252525",border:"none",fontSize:"13px",padding:"2px 6px"}} onClick={async () => {
        console.log(localStorage.getItem('statusUpload'), row.LRNo)
        const result = await LRInsert(row.GatePass, row.LRNo, localStorage.getItem('statusUpload'))
        console.log(result)
        if (result) {
          alert('Status Changed')
          window.location.reload()
        }
        window.location.reload()
      }}>Update</button>

    ]
  }
];


const TotalLR = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState();

  // const[lastpage,SetLastPage]= useState('')



  useEffect(() => {
    const totalposts = async () => {
      const result = await LrData(localStorage.getItem("inputname"))
      console.log(result)
      setData(result.Result)
      setCount(result.Count[0].datacount)

      const statues = await LrStatus()
      console.log('status', statues)

    };
    totalposts()
  }, [currentPage])


  const tableData = {
    columns, data
  };

  return (
    <>
      <NavPage />
      <div className="TotalLR">


        <div className="container">

          <h1>In Transit Details</h1>
          <h2 style={{marginTop:"50px",color: 'rgb(59, 56, 56)'}}>In Transit Details</h2>
          <p className="text-center" style={{fontSize:"20px" }}>Total In transit LR &nbsp; <b style={{ fontSize: "25px"}}>{count}</b></p>
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

export default TotalLR
