// import React, { useEffect, useState } from "react";
// import NavPage from "../Navbar/NavBar";
// import { InvoicesTotal } from "../../api";
// import Datatable from 'react-data-table-component';
// import DataTableExtensions from 'react-data-table-component-extensions';
// import 'react-data-table-component-extensions/dist/index.css';
// import ReactPagination from 'react-paginate';
// import Dropdown from 'react-bootstrap/Dropdown';
// import FileSaver from 'file-saver'




// const columns = [
//     {
//       name: "Date",
//       selector: "INV_DATE",
//       sortable: true
//     },
//     {
//       name: "Invoice No",
//       selector: "INV_NO",
//       sortable: true
//     },
//     {
//       name: "Invoice Amount",
//       selector: "INV_AMT",
//       sortable: true
//     },
//     {
//       name: "Status",
//       selector: "status",
//       sortable: true
//     },
//     {
//       name: "Action",
//       sortable: false,
//       selector: "null",
//       cell: (d) => [
//         <i
//           key={d.title}
//           // onClick={}
//           className="first fas fa-pen"
//         > view</i>,
//         <i
//           className="fas fa-trash-alt"
//         >download</i>
//       ]
//     }
//   ];
  

// const Totaldatas = () => {
//     const [data,setData] = useState([])
//     const[lastpage,SetLastPage] = useState('')
//     const[currentPage,setCurrentPage] = useState(1)

//     useEffect(()=>{
//         const totalposts = async () => {
//             const cid = localStorage.getItem('inputname')
//             console.log(currentPage)
//             const result = await InvoicesTotal(cid,currentPage)
//             setData(result.data)
//             console.log(result.Count[0]['total_row'])
//             const totalRow = result.Count[0]['total_row'];
//             SetLastPage(Math.ceil(totalRow/10))
//         };
//         totalposts()
//     },[currentPage])

//     const tableData= {
//         columns, data
//       };

//       const handlePageClick = (data) =>{
//         setCurrentPage(data.selected + 1)

//       }
   

//     return(
//         <div className="TotalInvoices">
//          <NavPage/>
//          <div className="container">
//          <h1 className="text-dark mn-3">Total Invoices</h1>
//          <Dropdown style={{ float: "right" }}>
//                         <Dropdown.Toggle variant="Secondary" id="dropdown-basic"> Invoices </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             <Dropdown.Item href="AddInvoices">Add Invoices</Dropdown.Item>
//                             <Dropdown.Item href="EditInvoices">Edit Invoices</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//          <div className="DataTable">
//         <DataTableExtensions {...tableData} >
//         <Datatable 
//         columns={columns} 
//         data={data}
//         />
//        </DataTableExtensions>
//        </div>
//        <div className="Pagination">
//        <ReactPagination
//                     previousLabel={'Previous'}
//                     nextLabel={'Next'}
//                     breakLabel={'...'}
//                     pageCount={lastpage}
//                     marginPagesDisplayed={2}
//                     pageRangeDisplayed={3}
//                     onPageChange={handlePageClick}
//                     containerClassName={'pagination justify-content-center'}
//                     pageClassName={'page-item'}
//                     pageLinkClassName={'page-link'}
//                     previousClassName={'page-item'}
//                     previousLinkClassName={'page-link'}
//                     nextClassName={'page-item'}
//                     nextLinkClassName={'page-link'}
//                     breakClassName={'page-item'}
//                     breakLinkClassName={'page-link'}
//                     activeClassName={'active'}
//       />
//       </div>
//        </div>
//          </div>
//     )
// }

// export default Totaldatas
