import React, { useEffect, useState } from 'react';
import NavPage from '../Navbar/NavBar';
import {ViewSupportingData} from '../../api';
import ReactPagination from 'react-paginate';
import Homefooter from '../footer/footer';
import Datatable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const columns =[
    {
        name: "Upload Date",
        selector: "Upload_Date",
        sortable: true
      },
      {
        name: "Reference Number",
        selector: "Reference_Number",
        sortable: true
      },
      {
        name: "Reference_Type",
        selector: "Reference_Type",
        sortable: true
      },
      {
        name: "Invoice Number",
        selector: "Invoice_Number",
        sortable: true
      },
      {
        name: "Actions",
        sortable: false,
    
        selector: "null",
        cell: (row) => [
            <a title='View Document' style={{marginRight:"8px"}} target="_blank" href={`${row.Upload_Document}`}>View</a>,
            <a title='View Document'onClick={()=> localStorage.setItem('Supportno',`${row.Reference_Number}`)} href="EditSupporting">Edit</a>
        ]
      }
]

const SupporingPage = () => {
    const [data,setData] = useState([]);

    const [lastpage,SetLastPage] = useState('')
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(()=>{
        const getSupporting = async()  => {
            console.log(currentPage)
            const result = await ViewSupportingData()
            console.log(result.data)
            setData(result.data)

             const totalData = result.count[0]['total_row']
             SetLastPage(Math.ceil(totalData/10))
        }
        getSupporting();
    },[currentPage])

    const tableData= {
        columns, data
      }; 


    const handlePageClick = (data) =>{
        setCurrentPage(data.selected + 1)
        console.log(currentPage)
    }
    return (
        <div className="Supporting-page">
            <NavPage />
            <div className="container">     
                    <h2>View Supporting</h2>

           <button type="button" style={{float:"right"}} onClick={()=>{window.location.href="./AddSupporting"}} class="btn btn-primary">Add Supporting</button>


           <div className="DataTable">
        <DataTableExtensions {...tableData} >
        <Datatable 
        columns={columns} 
        data={data}
        pagination
        />
       </DataTableExtensions>
       </div>  

                        {/* <table className="table" style={{margin:"25px"}}>
                            <thead>
                                <tr>
                                    <th>Reference Number</th>
                                    <th>Reference Type</th>
                                    <th>Upload Date</th>
                                    <th>Invoice Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    viewSupporting.map((datas)=>(
                                        <tr>
                                            <td>{datas.Reference_Number}</td>
                                            <td>{datas.Reference_Type}</td>
                                            <td>{datas.Upload_Date}</td>
                                            <td>{datas.Invoice_Number}</td>
                                            <td>
                                                <a title='View Document' target="_blank" href={`${datas.Upload_Document}`}>View</a>
                                                &nbsp;
                                                &nbsp;
                                                <a title='View Document'onClick={()=> localStorage.setItem('Supportno',`${datas.Reference_Number}`)} href="EditSupporting">Edit</a>

                                                </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table> */}
                    {/* <ReactPagination
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={lastpage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            /> */}
            </div>
            <br/>
            <Homefooter/>
        </div>
    )
}

export default SupporingPage
